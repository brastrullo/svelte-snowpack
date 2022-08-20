<script>
  import { fly } from "svelte/transition";
  import CheckCircle from '../icons/CheckCircle.svelte';
  export let text;
</script>
<div transition:fly={{y:'-50'}} class="ui-banner flex flex-row justify-around text-sm rounded-xl py-1 px-2 bg-opacity-70 text-green-700 bg-green-400 fixed top-2 left-1/2 transform -translate-x-1/2">
  <CheckCircle classInner="fill-current text-green-500" /><span class="font-secondary ml-2">{text}</span>
</div>