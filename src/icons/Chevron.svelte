<script>
  export let size = '3rem';
  export let opacity = '1';
  export let colour = '#000';
  export let className = '';
  export let direction = 'right';
  const rotate = {
    right: '0',
    left: '180deg',
    down: '90deg',
    up: '-90deg'
  };
</script>
<svg
  xmlns="http://www.w3.org/2000/svg"
  class={`fill-current ${className}`}
  style={`transform: rotate(${rotate[direction]})`}
  viewBox="0 0 14 24"
  height={size}
  fill={colour}
  fill-opacity={opacity}
  fill-rule="evenodd"
><path d="M13.72 11.22L1.7.28a1.02 1.02 0 00-1.43 0 1 1 0 000 1.42l11.29 10.28L.28 22.27a1 1 0 000 1.42c.4.39 1.04.39 1.43 0l12-10.94a1 1 0 00.3-.77 1 1 0 00-.3-.76" /></svg>