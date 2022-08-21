<script>
  import { dataState } from '../utils/store';
  import { LOADING } from '../utils/constants';
  import { fade } from 'svelte/transition';
  import Name from './Name.svelte';
  import ScrollDown from '../icons/ScrollDown.svelte';
  import Loading from '../icons/Loading.svelte';
  import ClickableCircle from '../icons/ClickableCircle.svelte';
  import BackgroundPattern from '../BackgroundPattern.svelte';
  export let selectModal;
  export let classList = '';
</script>
<style>

  .adline-copy {
    font-family: 'Open Sans', san-serif;
  }

  .home-container {
    scroll-snap-align: end;
    height: 100vh;
    padding: 1.25rem;
  }
  .style-container {
    --margin: 1.25rem;
    --mb: 2rem;
    box-sizing: border-box;
    height: calc(100vh - (var(--mb) + var(--margin)));
    background: rgb(243,244,246);
  }
  .scrolldown {
    font-family: 'Playfair Display', serif;
    font-size: .9rem;
    font-weight: 400;
    font-style: italic;
  }
  .scroll-loading {
    height: 2rem;
    @apply flex flex-col justify-center items-center;
  }
  .nav-menu {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
  }
  .version {
    font-family: 'Open Sans', sans-serif;
  }
</style>
<section data-index={0} class={`home-container relative ${classList}`}>
  <div class="style-container relative">
    <!-- <BackgroundPattern /> -->
    <div class="name-container absolute top-1/4 -translate-y-1/2">
      <Name />
    </div>
    <div class="absolute bottom-24 left-7 w-1/2">
      <p class="adline-copy">Much more to come soon.</p>
    </div>
    <ul class="nav-menu absolute bottom-8 right-8 text-right">
      <li><button on:click={() => selectModal('contact')} class="flex flex-row flex-nowrap align-text-bottom"><span>contact</span><ClickableCircle /></button></li>
    </ul>
  </div>
  <span class="version absolute bottom-2 left-2 text-gray-200 text-xs text-bold">v1.0</span>
  <div class="scroll-loading absolute bottom-0 left-0 w-screen">
    {#if $dataState === null}
      <span transition:fade class="animate-pulse text-gray-500 scrolldown items-center left-0 bottom-0 w-full flex justify-center">scroll down</span>
      <ScrollDown />
    {:else if $dataState === LOADING}
      <Loading />
    {/if}
  </div>
</section>
