<script>
  export let data;
  let selectedHighlight;
</script>
<style>
  @keyframes sideFloat {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  .sidefloat {
    display: inline-block;
    animation: sideFloat 2s ease-in-out infinite;
  }
</style>
<div>
  {#if $data}
  <div class="flex flex-row flex-wrap">
    <slot name="options">
      <p>Provide options</p>
    </slot>
    <slot name="content">
      <p>Provide content</p>
    </slot>
  </div>
  {/if}
</div>