<script>
export let sectionTitle;
export let hideHeader = false;
export let rect = undefined;
export let index;
export let classList = '';
let sectionElement;
$: rect = sectionElement && sectionElement.getBoundingClientRect();

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

<section data-index={index} bind:this={sectionElement} class={`data-index-${index} flex flex-col h-screen w-screen p-4 pt-10 ${classList}`}>
  {#if !hideHeader}
    <h1 class="header font-bold text-5xl mb-4">{sectionTitle}</h1>
  {/if}
  <slot>
    <p>Provide content</p>
  </slot>
</section>