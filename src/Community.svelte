<script>
  export let data;
</script>

<div class="">
  {#each $data.volunteer as volunteer}
    <div class="bg-gray-200 mx-0 my-2 flex flex-col p-2">
      <span>{volunteer.label}</span>
      <div class="flex flex-row center mx-auto">
        <span class="mx-4">{volunteer.detail2}</span>
        <span>{volunteer.start_date}</span>
      </div>
    </div>
  {/each}
</div>