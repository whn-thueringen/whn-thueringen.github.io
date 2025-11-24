<script>
  import Card from './Card.svelte';
  import { base } from '$app/paths';
</script>

<section class="container my-5" id="supporters">  
  <h2 class="text-center mb-4">Unsere Unterstützer</h2>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
    <Card
      title="Avenida Therme Hohenfelden"
      imgSrc="{base}/images/logo_avenida_therme.webp"
      imgSrcAlt="Avenida Therme Hohenfelden"
      link="https://www.avenida-therme.de"
    />
    <Card
      title="Heinze & Kollegen Finanzberatung"
      imgSrc="{base}/images/Logo_Heinze-Kollegen_Website.webp"
      imgSrcAlt="Heinze & Kollegen Finanzberatung"
      link="https://hk-finanzberatung.de/"
    />
    <Card
      title="VEKA Umwelttechnik"
      imgSrc="{base}/images/logo_veka-umwelttechnik_rgb.webp"
      imgSrcAlt="VEKA Umwelttechnik"
      link="https://www.veka-umwelttechnik.de/start/"
    />
    <Card
      title="Stiftung „St.Georg-Hospital Delitzsch"
      imgSrc="{base}/images/st-georg-stiftung_logo_250.webp"
      imgSrcAlt="Stiftung „St.Georg-Hospital Delitzsch"
      link="https://www.st-georg-hospital.de/"
    />
    <Card
      title="Hauke Metallbau GmbH"
      imgSrc="{base}/images/haukelogo.webp"
      imgSrcAlt="Hauke Metallbau GmbH"
      link="https://hauke-metallbau.de/"
    />
    <Card
    title="Brother Verbrauchsmaterial"
    imgSrc="{base}/images/head_brotherlogo.webp"
    imgSrcAlt="Brother Verbrauchsmaterial"
    link="https://www.brother.de/verbrauchsmaterial"
    />
    <Card
    title="Katholisches Krankenhaus St. Johann Nepomuk Erfurt"
    imgSrc="{base}/images/kkh_erfurt_logo.png"
    imgSrcAlt="Katholisches Krankenhaus St. Johann Nepomuk Erfurt"
    link="https://www.kkh-erfurt.de/"
    />
  </div>
</section>