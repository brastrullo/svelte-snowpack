<script>
  import { getData, data, dataState, sectionsLoaded, isOmniOpen } from "./utils/store";
  import { LOADED, LOADING } from './utils/constants';
  import { onMount } from "svelte";
  import Home from "./Home";
  import OverlayUI from "./OverlayUI";
  import Section from "./Section.svelte";
  import Experience from "./Experience.svelte";
  import Projects from "./Projects.svelte";
  import Skills from "./Skills.svelte";
  import About from "./About.svelte";
  import debounce from 'lodash.debounce';
  let promise;
  let innerHeight;
  let innerWidth;
  let __main;
  let scrollTop;
  let ticking = false;
  let containerRect;
  let pageIndex;
  let closeAllDetails;
  let selectModal;
  
  const callback = (entries, observer) => {
    let prevPageIndex = pageIndex;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        pageIndex = Number(entry.target.dataset.index);
        if (pageIndex !== 1 && prevPageIndex === 1) {
          console.log('leaving the experience section');
          closeAllDetails();
        }
      } else {
        isOmniOpen.set(false);
      }
    })
  };

  let observer = new IntersectionObserver(callback, {
    root: document.querySelector('#vscroll'),
    rootMargin: '0px',
    threshold: .5
  });

  const resizeEvent = () => {
    if (__main) {
      containerRect = __main.getBoundingClientRect();
      console.log('resize', containerRect);
      document.querySelectorAll('.vscroll-item').forEach(target => {
        observer.observe(target)
      })
    }
  };

  $: if (__main) {
    containerRect = __main.getBoundingClientRect();
  }

  onMount(() => {
    window.scroll(0,0);
    window.addEventListener('resize', debounce(resizeEvent, 200, { leading: false }));
  });

  $: if ($sectionsLoaded) {
    const entries = document.querySelectorAll('.vscroll-item');
    entries.forEach(target => {
      observer.observe(target)
    })
  }

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
    height: 100vh;
    overflow: hidden;
  }
  body {
    overflow: hidden;
    height: 100%;
  }

  .App {
    height: 100%;
    position: fixed;
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
  <main id="vscroll" bind:this={__main} class:overflow-hidden={$dataState === LOADING}>
    <Home {selectModal} classList="vscroll-item" />
    {#if $data}
      <Section classList="vscroll-item" index={1} sectionTitle={$data.headers[1]}>
        <Experience bind:closeAllDetails {data} {pageIndex} />
      </Section>
      <Section classList="vscroll-item" index={2} sectionTitle={'Projects'}>
        <Projects {data} />
      </Section>
      <Section classList="vscroll-item" index={3} sectionTitle={'Skills'}>
        <Skills {data} />
      </Section>
      <Section classList="vscroll-item" index={4} sectionTitle={$data.headers[3]}>
        <About {sectionsLoaded} {data} />
      </Section>
    {:else}
      <div class="h-screen w-screen" />
    {/if}
  </main>
  <OverlayUI bind:selectModal {__main} {scrollTop} {innerHeight} {innerWidth} />
</div>
