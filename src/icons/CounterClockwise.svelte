<script>
  export let opacity = '1';
  export let colour = '#000';
  export let className = '';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={`fill-current ${className}`}
  viewBox="0 0 24 24"
  height='3rem'
  width='2rem'
  fill={colour}
  fill-opacity={opacity}
  fill-rule="evenodd"
><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
<!-- Horizontally Mirror: transform="scale(-1, 1) translate(-25, 0)" -->
