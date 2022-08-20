<script>
  import ToggleContentBtn from './utils/ToggleContentBtn.svelte';
  export let data;
</script>
<div id="skills-container" class="font-secondary">
  <span>All web devs use JS, HTML and CSS.</span>
  <ToggleContentBtn>
    <button slot="button" class="flex justify-center justify-self-end items-center mr-1 text-sm font-bold p-2  border-2 border-black text-black uppercase" >skills＋</button>
    <div slot="content">
      {#each $data.skills as skills}
        <div class="flex my-1">
          <p class="flex justify-center items-center mr-1 text-sm w-20 bg-black text-white uppercase">{skills.label}</p>
          <p class="flex flex-wrap w-full h-auto pt-1">
            {#each skills.item.split(',') as item }
              <span class="text-xs border px-1 min-w-min max-w-max h-4 py-0 box-content mr-1 mb-1">
                {item}
              </span>
            {/each}
          </p>
        </div>
      {/each}
    </div>
  </ToggleContentBtn>
</div>