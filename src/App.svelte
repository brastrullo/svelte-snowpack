<script>
  import { onMount } from "svelte";
  import { getData, data } from "./fetchData";
  import Section from "./Section.svelte";
  let promise;

  onMount(async () => {
    promise = getData();
  });
</script>

<style>
  /* css will go here */
</style>

<div class="App">
  {#if !$data}
    <p>loading...</p>
  {:else}
    <header>
      <div>{$data.contact.name}</div>
      <div>
        <span>{$data.contact.phone}</span>
        |
        <span>{$data.contact.area}</span>
      </div>
      <a href={$data.contact.website.url}> {$data.contact.website.url} </a>
    </header>
    <main>
      <Section>
        <h1 slot="title">{$data.headers[0]}</h1>
        <ul slot="content">
          {#each $data.highlights as highlight}
            <li>
              <span>{highlight.label}: </span><span>{highlight.item}</span>
            </li>
          {/each}
        </ul>
      </Section>
      <Section>
        <h1 slot="title">{$data.headers[1]}</h1>
        <ul slot="content">
          {#each $data.skills as skills}
            <li><span>{skills.label}: </span><span>{skills.item}</span></li>
          {/each}
        </ul>
      </Section>
      <Section>
        <h1 slot="title">{$data.headers[2]}</h1>
        <article slot="content">
          {#each $data.work as work}
            <p>
              <span>{`${work.position}, ${work.company}, ${work.work_area}`}</span>
              <span>{`${work.start_date} - ${work.end_date}`}</span>
            </p>
            <ul>
              {#each work.details as details}
                <li>{details.item}</li>
              {/each}
            </ul>
          {/each}
        </article>
      </Section>
      <Section>
        <h1 slot="title">{$data.headers[4]}</h1>
        <ul slot="content">
          {#each $data.volunteer as volunteer}
            <li>
              <span>{`${volunteer.label}, ${volunteer.detail2}`}</span>
              <span>{volunteer.start_date}</span>
            </li>
          {/each}
        </ul>
      </Section>
      <Section>
        <h1 slot="title">{$data.headers[5]}</h1>
        <article slot="content">
          <div>
            <span>{$data.education.label}</span>
            <span>{$data.education.start_date}</span>
          </div>
          <span>{`${$data.education.detail1} ${$data.education.detail2}`}</span>
        </article>
      </Section>
      <Section>
        <h1 slot="title">{$data.headers[6]}</h1>
        <article slot="content">
          {#each $data.interests as interests}
            <p>{interests}</p>
          {/each}
        </article>
      </Section>
      <a href={$data.download.url} target="_blank" download={$data.download.name}>download</a>
    </main>
  {/if}
</div>
