<script>
  import { fly } from "svelte/transition";
  import { quintOut, sineInOut } from "svelte/easing";
  import MenuIcon from '../icons/Menu.svelte';
  import MainLogo from "../icons/MainLogo.svelte";
  export let toggleMenu;
</script>

<style>
  .icon-container :nth-child(1) {
    font-style: italic;
    font-size: 5vw;
  }
  .icon-container :nth-child(2) {
    font-size: 2vw;
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

<header
  in:fly={{ duration: 500, y: -100, easing: quintOut }}
  out:fly={{ duration: 500, y: -100, easing: sineInOut }}
  class="fixed w-screen top-0 left-0 flex justify-between align-middle bg-white bg-opacity-75 shadow-sm py-2 px-4 rounded-sm ">
  <div>
    <a href="/" class="icon-container font-primary h-20 font-black cursor-pointer"><MainLogo /></a>
  </div>
  <button class="btn bg-none border-none" on:click={toggleMenu}>
    <span tabindex="-1" class="btn__icon">
      <MenuIcon size='1.5rem' />
    </span>
  </button>
</header>