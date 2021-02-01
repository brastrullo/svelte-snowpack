<script>
  import { fly } from 'svelte/transition';
  import RadioToggleContent from './utils/RadioToggleContent.svelte';
  export let data;
  export let selectedHighlight;
  $: console.log(selectedHighlight);

  const projects = [
    {
      name: 'bradras.dev',
      desc: 'Recruiter Landing Page',
      live: false,
      gh: '#',
      demo: '#',
      tech: ['Svelte', 'Tailwind']
    },
    {
      name: 'rastr.digital',
      desc: 'Digital Consulting Agency',
      live: false,
      gh: '#',
      demo: '#',
      tech: ['Vue', 'Tailwind']
    },
    {
      name: 'bradleyrastrullo.com',
      desc: 'Personal Blog',
      live: false,
      gh: '#',
      demo: '#',
      tech: ['TBD']
    }
  ];
  const showSkills = () => {
    console.log('showSkills');
  };
  let selectedLabel = 'skills';
  let scrollContainer;
  const selectLabel = (label) => {
    selectedLabel = label;
    document.querySelector(`#${label}-container`).scrollIntoView({behavior: 'smooth'});
    console.log({selectedLabel});
  };
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
  .scroll-select-item {
    width: calc(100vw - (2 * 1rem));
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  .scroll-select {
    width: calc(100vw - (2 * 1rem));
    scroll-snap-type: x mandatory;
    scroll-snap-type: mandatory;
  }
  .slide-label {
    transform: translateX(100%);
  }
</style>
<div class="flex flex-col w-full font-secondary">
  {#if $data}
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
    <div class="flex flex-row justify-center my-2 w-full relative">
      <div class:slide-label={selectedLabel === 'projects'} class={`w-1/2 h-full bg-indigo-400 absolute top-0 left-0 translate-x-0 transition z-0 rounded`}/>
      {#each ['skills', 'projects'] as label, i}
        <div class="flex justify-center w-1/2 items-center z-10">
          <button
            class:text-white={selectedLabel === label}
            id={`${label.toLowerCase()}-label`}
            class={`text-black transition-all mr-1 p-auto`}
            on:click={() => selectLabel(label)}
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
        </button>
        </div>
      {/each}
    </div>
    <div bind:this={scrollContainer} class="scroll-select overflow-x-scroll overflow-y-hidden whitespace-nowrap h-80">
      <div id="skills-container" class="scroll-select-item inline-block align-top bg-gray-50 rounded-2xl h-full p-4">
        {#each $data.skills.slice(0,3) as skills}
          <div class="flex my-1">
            <p class="flex justify-center items-center mr-1 text-sm w-20 bg-black text-white uppercase">{skills.label}</p>
            <p class="flex flex-wrap w-full h-auto pt-1">
              {#each skills.item.split(',') as item }
                <span class="text-xs border px-1 min-w-min max-w-max h-4 py-0 box-content mr-1 mb-1">
                  {item}
                </span>
              {/each}
            </p>
          </div>
        {/each}
          <button on:click={showSkills} class="flex justify-center justify-self-end items-center mr-1 text-sm font-bold p-2  border-2 border-black text-black uppercase" >skills＋</button>
      </div>
      <div id="projects-container" class="scroll-select-item inline-block align-top bg-gray-50 rounded-2xl h-full p-4">
        <ul>
          {#each projects as project}
          <li class="my-1">
            <div class="border flex justify-between rounded-lg w-full p-1">
              <span>{project.name}</span>
              <div>
                {#each project.tech as tech}
                  <span class="text-xs">{tech}</span>
                {/each}
              </div>
              <div>
                <a href={project.gh} class="text-md">GH</a>
                <a href={project.demo} class="text-md" >DEMO</a>
              </div>
            </div>
          </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</div>