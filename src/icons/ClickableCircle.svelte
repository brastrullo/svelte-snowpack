<script>
  export let stroke = '#000';
  export let size = '.5rem';
  export let adjustY = '-0.25rem';
  export let adjustX = '0.05rem';
</script>
<style>
  svg {
    margin: 0 0 var(--adjustY) var(--adjustX);
    display: inline-block;
  }
</style>
<span>
  <svg style="--adjustY: {adjustY}; --adjustX: {adjustX}" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 8 7"><path d="M6.52 3.54a2.66 2.66 0 11-5.32 0 2.66 2.66 0 015.32 0z" {stroke} /></svg>
</span>