<script>
  import BankDetailsCard from './BankDetailsCard.svelte';

  import qr_code_bankverbindung from '$lib/assets/images/qr-code-bankverbindung.webp';
</script>

<div class="container my-5 text-center">
  <h2 class="card-title">Unsere Bankverbindung</h2>
  <div class="row justify-content-center">
    <BankDetailsCard
      qrCodeSrc={qr_code_bankverbindung}
      accountHolder="Förderverein weiblicher Handballnachwuchs in Thüringen"
      iban="DE38820510000163170231"
      bic="HELADEF1WEM"
    />
  </div>
</div>
