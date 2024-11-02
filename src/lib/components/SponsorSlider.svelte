<script lang="ts">

  import AvenidaTherme from '$lib/assets/images/logo_avenida_therme.webp';
  import HeinzeKollegen from '$lib/assets/images/Logo_Heinze-Kollegen_Website.webp';

  interface SlideProps {
    href: string;
    imgSrc: string;
    imgSrcAlt: string;
  }

  const slides: SlideProps[] = [
    {
      href: "https://www.avenida-therme.de/",
      imgSrc: AvenidaTherme,
      imgSrcAlt: "Avenida Therme Hohenfelden"
    },
    {
      href: "https://hk-finanzberatung.de/",
      imgSrc: HeinzeKollegen,
      imgSrcAlt: "Heinze & Kollegen Finanzberatung"
    },
  ];

  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides, ...slides, ...slides, ...slides, ...slides];
</script>


<div class="slider">
  <div class="slide-track">
    {#each duplicatedSlides as slide}
      <div class="slide">
        <a href={slide.href} target="_blank" rel="noopener noreferrer">
          <enhanced:img src={slide.imgSrc} alt={slide.imgSrcAlt} loading="lazy" />
        </a>
      </div>
    {/each}
  </div>
</div>
