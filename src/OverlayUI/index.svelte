<script>
  import { data, dataState, isOmniOpen } from '../utils/store';
  import { LOADED } from '../utils/constants';
  import { fade, fly } from "svelte/transition";
  import UIBanner from './UIBanner.svelte';
  import Header from './Header.svelte';
  import Menu from './Menu.svelte';
  import Modal from './Modal.svelte';
  import Share from '../Modals/Share.svelte';
  import Contact from '../Modals/Contact.svelte';
  import Download from '../Modals/Download.svelte';
  import ToggleContent from '../utils/ToggleContentBtn.svelte';
  export let __main;
  export let innerWidth;
  export let innerHeight;
  export let scrollTop;
  let showMenu;
  let showHeader;
  let showModal;
  let showUIBanner = false;
  let modalComponent;
  let dataLoaded = false;
  $: showHeader = innerHeight && scrollTop + (innerHeight/2) >= innerHeight;
  $: if ($dataState === LOADED && !dataLoaded) {
    showUIBanner = true;
    setTimeout(() => {
      showUIBanner = false;
      dataLoaded = true;
    }, 2000);
  }

  let lastKnownScrollPos;
  const toggleMenu = () => {
    if (scrollTop !== 0) {
      lastKnownScrollPos = scrollTop;
      console.log('pos', lastKnownScrollPos);
    }
    showMenu = !showMenu;
  };
  const toggleModal = () => {
    showModal = !showModal;
  };

  let modalObj = {
    share: Share,
    contact: Contact,
    download: Download
  };

  export const selectModal = (modal) => {
    modalComponent = modalObj[modal];
    console.log({modal, modalComponent})
    toggleModal();
  };

  const omniCallback = (isOpen) => {
    isOmniOpen.set(isOpen);
  }

</script>

<style>
  .btn::before {
    content: '';
    padding: 0 .25rem 0;
    font-size: .75rem;
    color: rgb(90, 90, 90);
    background: rgba(255,255,255,0.7);
    border-radius: 3px;
  }
  .btn:hover::before {
    color: rgb(66, 125, 253);
  }
  .share::before {
    content: 'share';
    pointer-events: all;
  }
  .contact::before {
    content: 'contact';
    position: absolute;
    right: 1.75rem;
    pointer-events: all;
  }
  .download::before {
    content: 'download';
    pointer-events: all;
    font-family: 'Open Sans', sans-serif;
  }

</style>
<div>
  {#if showHeader}
    <Header {toggleMenu}/>
    <div
      transition:fly={{x:200}}
      class="ui-buttons flex flex-col justify-center fixed bottom-0 right-4"
    >
    {#if !showModal}
    <div transition:fly={{x:200}}>
      <ToggleContent show={$isOmniOpen} callback={omniCallback}>
        <button
          slot="button"
          class:border-opacity-100={$isOmniOpen}
          class="group absolute bottom-0 right-0 rounded-full h-12 w-12 mb-10 border-4 border-blue-700 border-opacity-20 bg-white bg-opacity-50"
        >
          <span transition:fade class="transition-hover duration-500 ease-in-out text-blue-100 opacity-0 group-hover:opacity-100">●</span>
        </button>
        <div slot="content" class="absolute bottom-0 right-0 h-32 w-20 bg-gray-400 bg-opacity-0 pointer-events-none">
          <button on:click={() => {selectModal('share')}} transition:fly={{y:40}} class="btn share absolute top-0 right-3 mt-2 flex flex-row align-items items-center">
            <div class="pointer-events-auto hover:border-blue-600 transition duration-350 ease-in-out h-6 w-6 ml-0.5 rounded-full border-4 border-blue-400" />
          </button>
          <button on:click={() => {selectModal('contact')}} transition:fly={{x:40}} class="btn contact absolute bottom-12 left-0 mb-1 -ml-1 flex flex-row align-items items-center">
            <div class="pointer-events-auto hover:border-blue-600 transition duration-350 ease-in-out h-6 w-6 ml-0.5 rounded-full border-4 border-blue-400" />
          </button>
          <button on:click={() => {selectModal('download')}} transition:fly={{y:-40}} class="btn download absolute bottom-0 right-3 mb-2 flex flex-row align-items items-center">
            <div class=" pointer-events-auto hover:border-blue-600 transition duration-350 ease-in-out h-6 w-6 ml-0.5 rounded-full border-4 border-blue-400" />
          </button>
        </div>
      </ToggleContent>
    </div>
    {/if}
    </div>
  {/if}
  {#if $dataState === LOADED && showUIBanner}
    <UIBanner text="Sync successful." />
  {/if}
  {#if showMenu}<Menu {__main} {toggleMenu} {innerWidth} scrollY={lastKnownScrollPos} />{/if}
  {#if showModal && modalComponent}
    <Modal {data} {toggleModal}>
      <svelte:component this={modalComponent} />
    </Modal>
  {/if}
</div>