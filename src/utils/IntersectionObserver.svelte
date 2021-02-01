<script>
  import { onMount } from "svelte";
  export let callback;
  export let root = null;
  export let rootMargin = '0px';
  export let threshold = .5;
  let element;

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback()
        console.log(entry)
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

  <div bind:this={element}>
    <slot>
      <p>Provide content</p>
    </slot>
  </div>