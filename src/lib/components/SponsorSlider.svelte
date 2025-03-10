<script lang="ts">

import { base } from '$app/paths';

  interface SlideProps {
    href: string;
    imgSrc: string;
    imgSrcAlt: string;
  }

  const slides: SlideProps[] = [
    {
      href: "https://www.avenida-therme.de/",
      imgSrc: `${base}/images/logo_avenida_therme.webp`,
      imgSrcAlt: "Avenida Therme Hohenfelden"
    },
    {
      href: "https://www.veka-umwelttechnik.de/start/",
      imgSrc: `${base}/images/logo_veka-umwelttechnik_rgb.webp`,
      imgSrcAlt: "VEKA Umwelttechnik"
    },
    {
      href: "https://hk-finanzberatung.de/",
      imgSrc: `${base}/images/Logo_Heinze-Kollegen_Website.webp`,
      imgSrcAlt: "Heinze & Kollegen Finanzberatung"
    },
    {
      href: "https://www.st-georg-hospital.de/",
      imgSrc: `${base}/images/st-georg-stiftung_logo_250.webp`,
      imgSrcAlt: "Stiftung „St.Georg-Hospital“ Delitzsch"
    }
  ];

  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides, ...slides, ...slides, ...slides, ...slides];
</script>


<div class="slider">
  <div class="slide-track">
    {#each duplicatedSlides as slide}
      <div class="slide">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href={slide.href} target="_blank" rel="noopener noreferrer">
          <img src={slide.imgSrc} alt={slide.imgSrcAlt} loading="lazy" />
        </a>
      </div>
    {/each}
  </div>
</div>
