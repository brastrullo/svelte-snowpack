<script>
  import { data } from './utils/store';
  import ProjectItem from './ProjectItem.svelte';
  export let projects = [
    {
      name: 'bradras.dev',
      logoUrl: `${$data.icons.bradrasdev.find(obj => obj.key === 'plain-b').icon.url}`,
      title: 'for recruiters',
      live: false,
      tech: ['Svelte', 'Tailwind'],
      pageUrl: '/bradrasdev'
    },
    {
      name: 'rastr.digital',
      logoUrl: `${$data.icons.rastrdigital.find(obj => obj.key === 'main').icon.url}`,
      title: 'freelancing',
      disabled: true,
      tech: ['Vue', 'Tailwind'],
      pageUrl: '/rastrdigital'
    },
    {
      name: 'bradleyrastrullo.com',
      logoUrl: `${$data.icons.personal.find(obj => obj.key === 'old').icon.url}`,
      title: 'personal blog',
      disabled: true,
      tech: ['TBD'],
      pageUrl: '/personalblog'
    }
  ];
</script>
<ul>
  {#each projects as project}
    <ProjectItem {project} />
  {/each}
</ul>