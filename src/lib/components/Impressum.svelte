<script>
  import WaveTop from "$lib/components/WaveTop.svelte";

  import { base } from '$app/paths';
</script>

<WaveTop />

<footer class="text-center p-4" id="Impressum">
  <div class="container justify-content-center d-flex align-items-center flex-column">
    <h4>Impressum</h4>
    <p><strong>Förderverein des weiblichen Handballnachwuchses in Thüringen e.V.</strong></p>
    <p class='m-0'>Ansprechpartner: Steffi Günther</p>
    <p>Telefon: <a href='tel:+4917644415740' class='mb-3'>+49 176 44415740</a></p>
    <p class='m-0'>c/o Steffi Günther</p>
    <p class='m-0'>Eislebener Straße 16</p>
    <p class='m-0'>99195 Erfurt</p>
    <p class='mb-3'>Deutschland</p>
    <p>Email: <a href="mailto:info@whn-thueringen.de">info@whn-thueringen.de</a></p>
    <p>Vertreten durch: Ruben Arnold & Steffen Ahrens</p>
    <p>StNr.: 151/141/20933</p>
    <div class="line"></div>
    <a href="{base}/datenschutz/">Datenschutzerklärung</a>
  </div>
</footer>

