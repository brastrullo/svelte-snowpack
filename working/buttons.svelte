<a
  class="text-xs border border-blue-500 flex flex=row align-center align-bottom justify-between rounded py-1 px-2"
  href={$data.download.url}
  target="_blank"
  download={$data.download.name}>
  <span class="leading-1 text-blue">resume</span>
  <img class="w-4 pl-1" src={$data.download.icon} alt={$data.download.alt} />
</a>

<a
  transition:fly={{ x: 100, easing: quintOut }}
  class="shadow-md bg-blue-700 rounded-full h-16 w-16 flex justify-center align-middle"
  href={$data.download.url}
  target="_blank"
  download={$data.download.name}>
  Download
</a>

<div
  transition:fly={{ delay: 100, x: 100, easing: quintOut }}
  class="flex flex-col justify-around mb-4">
  <a
    class="text-blue-600 text-xs flex flex-col justify-center"
    target="_blank"
    href={$data.contact.website.url}>
    <img
      class="h-6"
      src={$data.contact.logo.url}
      alt={$data.contact.logo.alt} />
    {$data.contact.website.url.split('').slice(8).join('')}
  </a>
</div>
