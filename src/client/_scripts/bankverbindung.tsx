import { createSignal } from 'solid-js';

interface BankDetailsProps {
  qrCodeSrc: string;
  accountHolder: string;
  iban: string;
  bic: string;
}

const BankDetailsCard = (props: BankDetailsProps) => {
  const [copied, setCopied] = createSignal(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div class="col-md-6 col-lg-5 mb-4 text-start">
    <div class="h-100">
      <div class="row align-items-center">
        <div class="text-center mt-2 mb-2">
          <h5>QR-Code</h5>
          <img src={props.qrCodeSrc} class="img-fluid rounded-start" alt="QR Code" />
        </div>
        <div class="col">
          <div class="card">
              <div class="card-body">
              <p class="card-text"><strong>Kontoinhaber:</strong> {props.accountHolder}</p>
              <button 
                  class="btn btn-sm btn-outline-primary" 
                  onClick={() => copyToClipboard(props.accountHolder)}
                >
                  {copied() ? "Kopiert!" : "Kontoinhaber kopieren"}
              </button>
            </div>
          </div>
          <div class="card">
              <div class="card-body">
              <p class="card-text"><strong>IBAN:</strong> {props.iban}</p>
              <button 
                  class="btn btn-sm btn-outline-primary" 
                  onClick={() => copyToClipboard(props.iban)}
                >
                  {copied() ? "Kopiert!" : "IBAN kopieren"}
              </button>
            </div>
          </div>
          <div class="card">
              <div class="card-body">
              <p class="card-text"><strong>BIC:</strong> {props.bic}</p>
              <button 
                  class="btn btn-sm btn-outline-primary" 
                  onClick={() => copyToClipboard(props.bic)}
                >
                  {copied() ? "Kopiert!" : "BIC kopieren"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const Bankverbindung = () => (
  <div class="container my-5 text-center">
<h2 class="card-title">Unsere Bankverbindung</h2>
    <div class="row justify-content-center">
      <BankDetailsCard
        qrCodeSrc="./_assets/qr-code-bankverbindung.jpg"
        accountHolder="Förderverein weiblicher Handballnachwuchs in Thüringen"
        iban="DE38820510000163170231"
        bic="HELADEF1WEM"
      />
    </div>
  </div>
);

export default Bankverbindung;