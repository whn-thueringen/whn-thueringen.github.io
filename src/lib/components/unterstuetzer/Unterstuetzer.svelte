<script>
  import Card from './Card.svelte';
</script>

<section class="container my-5" id="supporters">  
  <h2 class="text-center mb-4">Unsere Unterstützer</h2>
  <div class="row justify-content-center">
    <Card
      title="Avenida Therme Hohenfelden"
      imgSrc="/images/logo_avenida_therme.webp"
      imgSrcAlt="Avenida Therme Hohenfelden"
      link="https://www.avenida-therme.de"
      ImgClass="card-img-top p-2"
    />
    <Card
      title="Heinze & Kollegen Finanzberatung"
      imgSrc="/images/Logo_Heinze-Kollegen_Website.webp"
      imgSrcAlt="Heinze & Kollegen Finanzberatung"
      link="https://hk-finanzberatung.de/"
      ImgClass="card-img-top p-2"
    />
    <Card
      title="Stiftung „St.Georg-Hospital“ Delitzsch"
      imgSrc="/images/st-georg-stiftung_logo_250.webp"
      imgSrcAlt="Stiftung „St.Georg-Hospital“ Delitzsch"
      link="https://www.st-georg-hospital.de/"
      ImgClass="p-2 max-w-52"
  />
  </div>
</section>
