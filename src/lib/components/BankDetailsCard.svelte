<script lang="ts">
  export let qrCodeSrc;
  export let accountHolder;
  export let iban;
  export let bic;

  let copiedAccountHolder = false;
  let copiedIban = false;
  let copiedBic = false;

  function copyToClipboard(text: string, type: 'accountHolder' | 'iban' | 'bic') {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'accountHolder') {
        copiedAccountHolder = true;
        setTimeout(() => copiedAccountHolder = false, 2000);
      } else if (type === 'iban') {
        copiedIban = true;
        setTimeout(() => copiedIban = false, 2000);
      } else if (type === 'bic') {
        copiedBic = true;
        setTimeout(() => copiedBic = false, 2000);
      }
    });
  }
</script>

<div class="col-md-6 col-lg-5 mb-4 text-start">
  <div class="h-100">
    <div class="row align-items-center">
      <div class="text-center mt-2 mb-2">
        <h5>QR-Code</h5>
        <p>Einfach mit ihrer Bank App scannen!</p>
        <img src={qrCodeSrc} class="img-fluid rounded-start" alt="QR Code" />
      </div>
      <div class="col">
        <!-- Kontoinhaber-Karte -->
        <div class="card-content">
          <div class="card-body">
            <p class="card-text"><strong>Kontoinhaber:</strong> {accountHolder}</p>
            <button 
              class="btn-own" 
              on:click={() => copyToClipboard(accountHolder, 'accountHolder')}
            >
              {copiedAccountHolder ? "Kopiert!" : "Kontoinhaber kopieren"}
            </button>
          </div>
        </div>

        <!-- IBAN-Karte -->
        <div class="card-content">
          <div class="card-body">
            <p class="card-text"><strong>IBAN:</strong> {iban}</p>
            <button 
              class="btn-own" 
              on:click={() => copyToClipboard(iban, 'iban')}
            >
              {copiedIban ? "Kopiert!" : "IBAN kopieren"}
            </button>
          </div>
        </div>

        <!-- BIC-Karte -->
        <div class="card-content">
          <div class="card-body">
            <p class="card-text"><strong>BIC:</strong> {bic}</p>
            <button 
              class="btn-own" 
              on:click={() => copyToClipboard(bic, 'bic')}
            >
              {copiedBic ? "Kopiert!" : "BIC kopieren"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
