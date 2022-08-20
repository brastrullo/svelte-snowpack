<script>
  import IntersectionObserver from './IntersectionObserver.svelte';
  import { onMount, getContext } from 'svelte';
  export let classList = '';
  export let key;
  export let id;
  const { scrollContainer, labelList, name, selectLabel } = getContext(key);
</script>

<IntersectionObserver
  root={scrollContainer}
  callback={(observer) => selectLabel(id, observer)}
  classList={`scroll-select-item ${name}-${id}-container ${classList}`}
>
  <slot>Provide content</slot>
</IntersectionObserver>