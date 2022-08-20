<script>
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { fly } from 'svelte/transition';
  import Chevron from './icons/Chevron.svelte';
  import CounterClockwise from './icons/CounterClockwise.svelte';
  import InfoCircle from './icons/iCircle.svelte';
  import debounce from 'lodash.debounce';
  export let data;
  let hscrollContainer;
  let containerRect;

  const objectArr = writable([]);
  let currentIndex;
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentIndex = Number(entry.target.dataset.index);
      }
    })
  };

  export const closeAllDetails = () => {
    objectArr.update(arr => {
      arr.forEach(obj => {
        obj.show = false;
      });
      return arr;
    });
  };

  let observer = new IntersectionObserver(callback, {
    root: document.querySelector('#hscroll'),
    rootMargin: '0px',
    threshold: .5
  });

  const resizeEvent = () => {
    if (hscrollContainer) {
      containerRect = hscrollContainer.getBoundingClientRect();
      console.log('resize', containerRect);
    }
  };

  $: if (hscrollContainer) {
    containerRect = hscrollContainer.getBoundingClientRect();
  }

  onMount(() => {
    objectArr.set($data.work.map((obj, i) => ({ id: i, show: false })));
    document.querySelectorAll('.hscroll-item').forEach(target => {
      observer.observe(target)
    })
    window.addEventListener('resize', debounce(resizeEvent, 200, { leading: false }));
  });

  const toggleDetails = (itemIndex) => {
    let copy;
    objectArr.subscribe((arr) => {
      copy = arr.slice().map((item, i) => {
        return (i === itemIndex)
        ? { ...item, show: !item.show }
        : item
      });
    });
    objectArr.set(copy);
  };
  const imgPos = ['right top', 'right top', 'center', 'left top'];
  const lastCarouselPos = (i) => i !== null && i !== $data.work.length - 1;
  const resetCarousel = () => {
    hscrollContainer.scrollTo({left: 0});
  };
  const slideImgRight = () => {
    hscrollContainer.scrollBy({left: containerRect.width, behavior: 'smooth'});
  };
  const slideImgLeft = () => {
    hscrollContainer.scrollBy({left: -containerRect.width, behavior: 'smooth'});
  };
</script>

<style>
  .hscroll-container {
    white-space: nowrap;
    width: calc(100vw - (2 * 1rem));
    scroll-snap-type: x mandatory;
    scroll-snap-type: mandatory;
  }

  .hscroll-item {
    height: calc(100vh - 3rem - 6rem);
    width: calc(100vw - (2 * 1rem));
    scroll-snap-align: center;
    scroll-snap-stop: always;
    font-family: 'Open Sans', sans-serif;
    z-index: -10; /* makes .text-container unclickable 'z-0' */
  }
  .toggle-details-text {
    font-family: 'Open Sans', sans-serif;
  }
</style>

<div class="relative">
  <div bind:this={hscrollContainer} id="hscroll" class="hscroll-container overflow-y-hidden overflow-x-scroll">
    {#each $data.work as work, i}
      <div class="justify-start align-top inline-block h-full border-box mr-2 px-4">
        <article
          data-index={i}
          style={`background: linear-gradient(
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.25)
          ), url(${work.main_img.url}) no-repeat ${imgPos[i]} / cover`}
          on:click={() => toggleDetails(i)}
          class="hscroll-item flex flex-col justify-between cursor-pointer text-left bg-gray-200 rounded-md p-4 "
        >
          <div class="main-text">
            <p class="text-3xl whitespace-normal text-white">{work.position}</p>
            <span class="text-sm text-gray-200">{work.company}</span>
          </div>
          {#if $objectArr.length > 0 && $objectArr[i].show}
            <div transition:fly={{y:500}} class="text-container bg-white rounded-lg bg-opacity-90 px-6 py-4 relative bottom-0 cursor-default z-0">
              <img class="h-12 w-auto" src={work.sub_img.url} alt={work.sub_img.url}>
              <div class="flex flex-col my-2">
                {#each work.details as details}
                  <p class="whitespace-normal text-sm text-left my-2">{details.item}</p>
                {/each}
              </div>
              <ul class="flex flex-row flex-wrap">
                {#each work.skills as skill}
                  <li class="cursor-pointer text-xs border border-blue-700  text-blue-700 rounded-sm px-1 mr-1 mb-1 z-20">{skill}</li>
                {/each}
              </ul>
              {#if work.otherSkills.length > 0}
                <ul class="flex flex-row flex-wrap">
                  {#each work.otherSkills as skill}
                    <li class="cursor-pointer text-xs border border-indigo-700  text-indigo-700 rounded-sm px-1 mr-1 mb-1 z-20">{skill}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/if}
        </article>
      </div>
    {/each}
    <span class="toggle-details-text flex flex-row items-center align-text-bottom align-items text-xs text-gray-400 absolute -bottom-6 left-0"><InfoCircle colour="gray" />Click to toggle details</span>
    {#if currentIndex !== null && currentIndex !== 0}
      <button on:click={slideImgLeft} class="absolute h-19 w-11 top-1/2 -ml-4 rounded-r-lg left-0 p-2 bg-gray-700 bg-opacity-20 hover:bg-opacity-50 text-opacity-10"><Chevron direction="left" className="text-opacity-40 text-white" /></button>
    {/if}
    <button on:click={() => lastCarouselPos(currentIndex) ? slideImgRight() : resetCarousel()} class="absolute h-19 w-11 top-1/2 -mr-4 rounded-l-lg right-0 p-2 bg-gray-700 bg-opacity-20 hover:bg-opacity-50 text-opacity-10">
    {#if lastCarouselPos(currentIndex)}
      <Chevron direction="right" className="text-opacity-40 text-white" />
    {:else}
      <CounterClockwise height='3rem' width='1.75rem' className="text-opacity-40 text-white" />
    {/if}
    </button>
  </div>
</div>