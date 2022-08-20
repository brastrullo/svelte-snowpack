<script>
  import { data } from '../utils/store';
  import { onMount } from "svelte";
  let socials;
  onMount(() => {
    socials = $data.social
  })
</script>

<div class="flex h-full w-full flex-row border-box justify-center items-center">
  {#if (socials)}
    {#each socials as item}
      <a class="h-10 w-10 shadow m-2 p-1 border-2 border-black rounded relative  bg-white bg-transparent" href={item.site.url}>
        <img src={item.icon.url} alt={item.icon.alt}/>
        <span class="hidden">{item.label}</span>
      </a>
    {/each}
    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  {/if}
</div>