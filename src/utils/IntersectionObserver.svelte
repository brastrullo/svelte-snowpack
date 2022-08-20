<script>
  import { onMount } from "svelte";
  export let callback;
  export let root = null;
  export let rootMargin = '0px';
  export let threshold = .5;
  export let classList = '';
  let element;

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, entryIndex) => {
      if (entry.isIntersecting) {
        callback({...entry, entryIndex, observerObj: observer})
      }
    })
  }, {
    root,
    rootMargin,
    threshold
  });

  onMount(() => {
    observer.observe(element);
  });
  </script>

  <div bind:this={element} class={classList}>
    <slot>
      <p>Provide content</p>
    </slot>
  </div>