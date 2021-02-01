<script>
  import { getData, data, dataState } from "./utils/fetchData";
  import { LOADED, LOADING } from './utils/constants';
  import { onMount } from "svelte";
  import Home from "./Home";
  import OverlayUI from "./OverlayUI";
  import Section from "./Section.svelte";
  import Highlights from "./Highlights.svelte";
  import Experience from "./Experience.svelte";
  // import Community from "./Community.svelte";
  import About from "./About.svelte";
  let promise;
  let innerHeight;
  let innerWidth;
  let __main;
  let scrollTop;
  let ticking = false;

  onMount(() => {
    window.scroll(0,0);
  });

  $: if (__main) {
    __main.addEventListener('scroll', function(e) {
      if (!ticking) {
        requestAnimationFrame(() => {
          scrollTop = e.target.scrollTop;
          if ($dataState === null){
            promise = getData();
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  html {
    height: 100%;
    overflow: hidden;
  }
  body {
    overflow: hidden;
    height: 100%;
  }

  .App {
    height: 100vh;
  }
  main {
    scroll-snap-type: mandatory;
    scroll-snap-type: y mandatory;
    height: 100%;
    width: 100%;
    overflow: scroll;
  }

  ::-webkit-scrollbar,
  html::-webkit-scrollbar,
  body::-webkit-scrollbar,
  .App::-webkit-scrollbar,
  main::-webkit-scrollbar {
    display: none;
  }

  body, .App, main {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  *:focus:not(.focus-visible) {
    outline: none;
  }

  .focus-visible {
    outline: lightgreen solid 2px;
  }
</style>

<svelte:window
  bind:innerHeight={innerHeight}
  bind:innerWidth={innerWidth}
/>

<div class={`App font-sans h-screen w-screen`}>
  <main bind:this={__main} class:overflow-hidden={$dataState === LOADING}>
    <Home />
    {#if $data}
      <Section index={1} sectionTitle={$data.headers[0]} hideHeader={true}>
        <Highlights {data} />
      </Section>
      <Section index={2} sectionTitle={$data.headers[1]}>
        <Experience {data} />
      </Section>
      <!-- <Section sectionTitle={$data.headers[2]}>
        <Community {data} />
      </Section> -->
      <Section index={3} sectionTitle={$data.headers[3]}>
        <About {data} />
      </Section>
    {:else}
      <div class="h-screen w-screen" />
    {/if}
  </main>
  <OverlayUI {__main} {scrollTop} {innerHeight} {innerWidth} />
</div>
