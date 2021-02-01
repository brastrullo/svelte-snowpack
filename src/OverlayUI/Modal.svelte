<script>
  import Close from '../icons/Close.svelte';
  export let toggleModal;
  let modal;

  const modalHandler = (e) => {
    if (!e.target.closest(".modal-container")) {
      toggleModal()
    }
  };
</script>

<style>
  .modal-container {
    min-height: 20rem;
    min-width: 15rem;
    @apply h-auto w-auto;
  }
</style>
<div on:click={modalHandler} class="h-screen w-screen top-0 left-0 fixed flex flex-col justify-center items-center bg-opacity-20 bg-gray-800">
  <div bind:this={modal} class="modal-container relative bg-white shadow-md rounded-md">
    <button class="absolute top-0 right-0" on:click={toggleModal}><Close /></button>
    <div class="h-full w-full p-8">
      <slot>Provide data</slot>
    </div>
  </div>
</div>