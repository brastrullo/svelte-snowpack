<script>
  export let show = false;
  export let callback = () => console.log('no callback provided');
  const toggle = () => {
    show = !show;
    callback(show);
  };
</script>
<div>
  <div on:click={toggle}>
    <slot name="button">
      Provide Button
    </slot>
  </div>
  {#if show}
    <slot name="content">Provide content</slot>
  {/if}
</div>