<script>
  let show = false;
  const toggle = () => {
    show = !show;
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