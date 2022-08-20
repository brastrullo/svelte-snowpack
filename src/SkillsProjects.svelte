<script>
  import HScrollContainer from './utils/HorizontalScroll.svelte';
  import HScrollItem from './utils/HorizontalScrollItem.svelte';
  import Skills from './Skills.svelte';
  import Projects from './Projects.svelte';
  export let data;
  const key = {}; // intentional object key
  const components = {
    skills: Skills,
    projects: Projects
  };
  const labelList = ['skills', 'projects', '3', '4'];
</script>

<HScrollContainer
  name={'SP'}
  {labelList}
  {key}
>
  <span
    let:label
    let:selected
    slot="button"
    class:text-blue-700={selected}
    class={`text-black transition-all mr-1 p-auto`}
  >
    {label}
  </span>
    <HScrollItem {key} id={'skills'}>
      <svelte:component this={components['skills']} {data} />
    </HScrollItem>
    <HScrollItem {key} id={'projects'}>
      <svelte:component this={components['projects']} {data} />
    </HScrollItem>
    <HScrollItem {key} id={3}>
      <p>3</p>
    </HScrollItem>
    <HScrollItem {key} id={4}>
      <p>4</p>
    </HScrollItem>
</HScrollContainer>