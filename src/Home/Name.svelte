<script>
import debounce from 'lodash.debounce';
import { onMount } from "svelte";
import { fly } from 'svelte/transition';
import { sineOut } from 'svelte/easing';
const devArray = ['frontend', 'user experience', 'javascript','creative', 'socially-distanced'];
let i = 0;
const clickHandler = () => {
  i !== devArray.length - 1
  ? i++
  : i = 0;
};
</script>
<style>
  :root {
    --font-size-1: 20vw;
    --font-size-2: 5vw;
  }
  .name-container {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: var(--font-size-1);
    position: absolute;
  }

  .name-first, .name-last {
    display: block;
    line-height: .9;
  }
  .name-last {
    padding-left: 5vw;
  }
  .icon-1 {
    font-style: italic;
    font-weight: 900;
  }
  .icon-2 {
    font-size: calc(var(--font-size-1)/4);
  }

  .name-subtitle {
    font-family: 'Open Sans', sans-serif;
    font-size: var(--font-size-2);
    font-weight: 100;
    text-align: right;
  }
  .name-dev {
    font-size: var(--font-size-2);
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    text-align: right;
  }

  @media only screen and (min-width: 600px) {
  .name-container {
    font-size: 5rem;
    margin-left: 2rem;
  }
  .icon-2 {
    font-size: calc(6rem/4);
  }
  .name-subtitle, .name-dev {
    font-size: 1rem;
  }
}
</style>
<div class="name-container">
  <span class="name-first">Bradley</span>
  <span class="name-last">Rastru<span class="icon-1">ll</span><span class="icon-2 text-blue-300 hover:text-blue-700 transition cursor-pointer active:text-green-400 animate-pulse" on:click={clickHandler}>᮰</span></span>
  <div class="flex flex-row-reverse">
    <span class="name-dev">.dev</span>
    {#key i}
      <span
        in:fly={{x:-50, delay: 150, opacity: 0, easing: sineOut, duration: 300}}
        out:fly={{duration:150}}
        class="name-subtitle min-w-max text-right"
      >
        {devArray[i]}
      </span>
    {/key}
  </div>
</div>