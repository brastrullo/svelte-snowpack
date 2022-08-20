<script>
  import { data } from './utils/store';
  import { fly } from 'svelte/transition';
  import RadioToggleContent from './utils/RadioToggleContent.svelte';
  import SPComponent from './SkillsProjects.svelte';
  export let selectedHighlight;
  $: console.log(selectedHighlight);
</script>

<style>
  .highlight-item {
    width: calc(50% - 1rem);
  }
  .selected-highlight {
    @apply bg-indigo-50 text-blue-500;
  }
  .quoted-text::before,
  .quoted-text::after {
    font-weight: bold;
    font-size: 1.5rem;
    content: open-quote;
    top: 0;
    left: 0;
    position: absolute;
  }
  .quoted-text::after {
    content: close-quote;
    left: unset;
    right: 0;
  }
</style>

<RadioToggleContent {data}>
  <div slot="options" class="flex flex-row flex-wrap w-full my-2">
    {#each $data.highlights as highlight, i}
      <div class:selected-highlight={selectedHighlight === i} class="highlight-item flex flex-row border-box w-1/2 rounded-lg m-2 justify-center items-center bg-white">
        <input class="hidden" id={`highlight${i}`} name="highlight" type="radio" value={i} bind:group={selectedHighlight}>
        <label for={`highlight${i}`} class="font-secondary flex items-center font-bold justify-center min-w-min text-center h-full w-full p-2 hover:text-blue-800 cursor-pointer">
          {highlight.label}
        </label>
      </div>
    {/each}
  </div>
  <div slot="content" class="relative flex flex-col items-center h-32 w-full cursor-default">
    <div class="quoted-text flex justify-center items-center font-primary w-full border-b-2 h-20 px-4 py-auto border-gray-300">
      {#key selectedHighlight}
        <p in:fly={{x:-500,duration:400}} out:fly={{x:500,duration:400}} class="text-center absolute mx-4">{selectedHighlight !== undefined ? $data.highlights[selectedHighlight].item : ''}</p>
      {/key}
    </div>
    {#key selectedHighlight}
      <div in:fly={{x:500,duration:400,delay:100}} out:fly={{x:-500,duration:400,delay:100}} class="text-5xl leading-none absolute bottom-0">
        {selectedHighlight === undefined ? `⭒⭒⭒⭒⭒` : `⭑⭑⭑⭑⭑`}
      </div>
    {/key}
  </div>
</RadioToggleContent>