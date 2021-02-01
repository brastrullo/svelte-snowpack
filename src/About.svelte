<script>
  export let data;
</script>
<article>
  {#if $data}
    <p>this is the about article</p>
    <p>Interests</p>
    {#each $data.interests as interests}
      <p>{interests}</p>
    {/each}
  {/if}
</article>