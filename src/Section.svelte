<script>
import { onMount } from "svelte";
export let sectionTitle;
export let hideHeader = false;
export let rect = undefined;
export let index;
let sectionElement;
$: rect = sectionElement && sectionElement.getBoundingClientRect();

let currentPage = 0;

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage = Number(entry.target.dataset.index);
    }
  });
  console.log('section', {currentPage});
}

let observer = new IntersectionObserver(callback, {
  root: document.querySelector('.App'),
  rootMargin: '0px',
  threshold: .5
});

onMount(() => {
  observer.observe(sectionElement);
});
</script>

<style lang="postcss">
  .header {
    font-family: 'Playfair Display', serif;
  }
  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
</style>

<section data-index={index} bind:this={sectionElement} class="flex flex-col h-screen w-screen p-4 pt-10">
  {#if !hideHeader}
    <h1 class="header font-bold text-5xl mb-4">{sectionTitle}</h1>
  {/if}
  <slot {currentPage}>
    <p>Provide content</p>
  </slot>
</section>