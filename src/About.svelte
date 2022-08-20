<script>
  import ScheduleMe from './ScheduleMe.svelte';
  export let data;
  export let sectionsLoaded;

  sectionsLoaded.update(() => true);
</script>
<article>
  {#if $data}
    <p>this is the about article</p>
    <p>Interests</p>
    {#each $data.interests as interests}
      <p>{interests}</p>
    {/each}
    <ScheduleMe />
  {/if}
</article>