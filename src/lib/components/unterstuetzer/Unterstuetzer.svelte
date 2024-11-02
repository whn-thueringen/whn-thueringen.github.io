<script>
  import Card from './Card.svelte';

  import AvenidaTherme from '$lib/assets/images/logo_avenida_therme.webp';
  import HeinzeKollegen from '$lib/assets/images/Logo_Heinze-Kollegen_Website.webp';
</script>

<section class="container my-5" id="supporters">  
  <h2 class="text-center mb-4">Unsere Unterstützer</h2>
  <div class="row justify-content-center">
    <Card
      title="Avenida Therme Hohenfelden"
      imgSrc="{ AvenidaTherme }"
      imgSrcAlt="Avenida Therme Hohenfelden"
      link="https://www.avenida-therme.de"
    />
    <Card
      title="Heinze & Kollegen Finanzberatung"
      imgSrc=" { HeinzeKollegen }"
      imgSrcAlt="Heinze & Kollegen Finanzberatung"
      link="https://hk-finanzberatung.de/"
    />
  </div>
</section>
