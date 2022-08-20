<script>
  import { writable } from 'svelte/store';
  import { fly } from 'svelte/transition';
  import { onMount, onDestroy } from "svelte";
  import Close from '../icons/Close.svelte';
  export let toggleMenu;
  export let innerWidth;
  export let scrollY;
  export let __main;

  const selectedLink = writable(null);
  const menuItems = [
    { id: 0, name: 'Experience', colour: 'bg-gray-600' },
    { id: 1, name: 'Projects', colour: 'bg-gray-500' },
    { id: 2, name: 'Skills', colour: 'bg-blue-500' },
    { id: 3, name: 'About', colour: 'bg-gray-900' },
  ];

  onMount(() => {
    // document.body.classList.add('fixed');
    document.body.classList.add('overflow-hidden');
    document.body.style.top = `-${scrollY}px`;
  })

  onDestroy(() => {
    document.body.classList.remove('overflow-hidden');
    document.body.style.top = '';
    let scroll;
    selectedLink.subscribe(val => {
      val === null ? scroll = scrollY : scroll = innerHeight * (parseInt(val) + 1);
      __main.scroll({ top: scroll, left:0});
    })
  })

  const visitLink = (link) => {
    selectedLink.set(link);
    toggleMenu();
  };
</script>

<style>
  .link-container {
    position: relative;
    @apply w-full flex flex-col items-center align-middle justify-center;
  }
  .link {
    position: relative;
    font-family: 'Playfair Display';
    font-weight: 500;
    font-size: 3rem;
    padding: .5rem;
    color: #fff;
  }
  .link:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
  }
  .link:hover:after {
    width: 100%;
    left: 0;
  }
  .btn {
    z-index: 99999;
  }
  .btn:focus,
  .btn__icon:focus {
    outline: none;
  }

  .btn:focus > .btn__icon  {
    box-shadow: 0 0 2px 2px #ff6f6f; /* keyboard-only focus styles */
  }
</style>
/**
* PurgeCSS:
* h-1/3
* h-1/4
* h-1/5
* h-1/6
* allows these dynamic classes
**/
<div class="h-screen w-screen fixed top-0 right-0 z-50">
  <div class="flex flex-col justify-end items-center align-middle h-full w-full">
    {#each menuItems as item,i}
    <div transition:fly={{x: innerWidth, opacity: 0, delay: i*50, duration: 275}} class={`link-container ${item.colour} h-1/${menuItems.length}`}>
      <button
        class="link"
        on:click={() => visitLink(i)}
      >
        {item.name}
      </button>
    </div>
    {/each}
    <button transition:fly={{x: 100, opacity: 0, duration: 275}} class="btn fixed top-2 right-2" on:click={toggleMenu}><span class="btn__icon" tabindex="-1"><Close /></span></button>
  </div>
</div>

