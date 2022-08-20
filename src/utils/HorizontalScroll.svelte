<script>
  import IntersectionObserver from './IntersectionObserver.svelte';
  import debounce from 'lodash.debounce';
	import { onMount, setContext } from 'svelte';
  export let labelList;
  export let key;
  export let name;

  labelList = labelList.map(el => el.toLowerCase());
  let scrolling;
  let scrollContainer;
  let selectedLabel = labelList[0];
  const DEBOUNCE_DELAY = 350;

  const selectLabel = (label) => {
    const element = document.querySelector(`.${name}-${label}-container`);
    selectedLabel = label.toString();
    if (element && !scrolling) {
      scrolling = true;
      element.scrollIntoView({behavior: 'smooth'});
      console.log({selectedLabel});
      setTimeout(() => {
        scrolling = false;
      }, DEBOUNCE_DELAY)
    }
  };

  setContext(key, {
    scrollContainer,
    labelList,
    name,
    selectLabel
  });

  const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
</script>

<style>
  .scroll-select {
    width: calc(100vw - (2 * 1rem));
    scroll-snap-type: x mandatory;
    scroll-snap-type: mandatory;
  }
  .slide-label {
    transform: translateX(100%);
  }
  .scroll-select :global(.scroll-select-item) {
    width: calc(100vw - (2 * 1rem));
    scroll-snap-align: center;
    /* scroll-snap-stop: always; */
    @apply inline-block align-top bg-gray-100 rounded-2xl h-full p-4;
  }
</style>

<div class="flex flex-col w-full h-full font-secondary">
  <div class="grid grid-flow-col row-start-1 row-end-auto items-center my-2 w-full relative">
    {#key selectedLabel}
      <div class={`w-full h-0.5 bg-blue-700 absolute top-0 left-0 translate-x-0 transition z-0 rounded`}/>
    {/key}
    {#each labelList as label, i}
      <button class={`h-full z-10`} on:click={() => selectLabel(label)}>
          <slot name="button" label={capitalize(label)} {i} selected={selectedLabel === label}></slot>
      </button>
    {/each}
  </div>
  <div bind:this={scrollContainer} class="row-span-5 scroll-select overflow-x-scroll overflow-y-hidden whitespace-nowrap h-full">
    <slot>Provide content</slot>
  </div>
</div>