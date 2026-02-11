<script lang="ts">
  import WaveTop from './WaveTop.svelte';
  import WaveBottom from './WaveBottom.svelte';

  import { base } from '$app/paths';

  interface ContentProps {
    imgSrc: string;
    imgSrcAlt: string;
    title: string;
  }

  const contents: ContentProps[] = [
    {
      imgSrc: `${base}/images/Steffen_Ahrens-no_logo.webp`,
      imgSrcAlt: 'Steffen Ahrens',
      title: 'Steffen Ahrens',
    },
    {
      imgSrc: `${base}/images/`,
      imgSrcAlt: 'Steffi Günther',
      title: 'Steffi Günther',
    }
  ];
</script>

<WaveTop />
<div id="Vorstand" class="secondary-background">
  <section class="container" id="team">
    <h2 class="text-center mb-4">Vorstand</h2>
    <div class="row justify-content-center">
      {#each contents as content}
        <div class="col-md-4 mb-4">
          <div class="card-content">
            <img src={content.imgSrc} class="card-img-top-content" alt={content.imgSrcAlt} loading="lazy" />
            <div class="card-body text-center">
              <h5 class="card-title">{content.title}</h5>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
<WaveBottom />
