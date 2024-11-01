<script lang=ts>
  export let qrCodeSrc;
  export let accountHolder;
  export let iban;
  export let bic;

  // Reaktiver Zustand für "kopiert"-Status
  let copied = false;

  function copyToClipboard(text:string) {
    navigator.clipboard.writeText(text).then(() => {
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
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
        <div class="card">
          <div class="card-body">
            <p class="card-text"><strong>Kontoinhaber:</strong> {accountHolder}</p>
            <button 
              class="btn btn-sm btn-outline-primary" 
              on:click={() => copyToClipboard(accountHolder)}
            >
              {copied ? "Kopiert!" : "Kontoinhaber kopieren"}
            </button>
          </div>
        </div>

        <!-- IBAN-Karte -->
        <div class="card">
          <div class="card-body">
            <p class="card-text"><strong>IBAN:</strong> {iban}</p>
            <button 
              class="btn btn-sm btn-outline-primary" 
              on:click={() => copyToClipboard(iban)}
            >
              {copied ? "Kopiert!" : "IBAN kopieren"}
            </button>
          </div>
        </div>

        <!-- BIC-Karte -->
        <div class="card">
          <div class="card-body">
            <p class="card-text"><strong>BIC:</strong> {bic}</p>
            <button 
              class="btn btn-sm btn-outline-primary" 
              on:click={() => copyToClipboard(bic)}
            >
              {copied ? "Kopiert!" : "BIC kopieren"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
