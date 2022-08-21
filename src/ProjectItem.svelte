<script>
  export let project;
  export let colour;
  export let classList;
</script>

<style>
  :root{
    --project-item-bg: rgb(33, 32, 32);
  }
  .disabled {
    @apply bg-gray-400 text-gray-500 pointer-events-none cursor-default;
  }

  .project-item {
   background-color: var(--project-item-bg);
  }


</style>

<div style={`--project-item-bg:${colour}`} class={`${classList} project-item grid my-4 bg-gray-200 p-2 max-w-md font-secondary gap-1`}>
  <div class="col-start-1 row-start-1 row-span-2 flex flex-col">
    <div class="flex flex-row flex-wrap items-center">
      <img class="w-8 pr-1 pb-1" src={project.logoUrl} alt={`${project.name} logo`}>
      <a class="text-sm pr-4" href={`https://${project.name}`}>{project.name}</a>
    </div>
    <div class="flex flex-wrap">
      {#each project.tech as tech}
        <span class="border border-gray-500 text-gray-500 text-xs px-1 py-0 mr-1 mb-1">{tech}</span>
      {/each}
    </div>
  </div>
    <p class="col-start-3 col-span-2 row-start-1 text-right text-3xl font-primary">{project.title}</p>
    <div class="col-start-3 col-span-2 row-start-2 flex flex-row-reverse">
      <a class:disabled={project.disabled} class="bg-gray-800 text-white w-auto px-2 h-8 flex justify-center items-center font-primary italic overflow-ellipsis" href={project.pageUrl}>{project.disabled ? 'in progress' : 'more info'}</a>
    </div>
</div>