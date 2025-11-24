<script>
  import Card from './Card.svelte';

  import { base } from '$app/paths';

</script>

<section id="documents" class="container my-5">
  <h2 class="text-center mb-4">Dokumente</h2>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Satzung"
        description="Hier findest du die Satzung als PDF zum Download."
        link="{base}/downloads/unterschriebene_Satzung_FwHT_ab_24-11-2025[1].pdf"
        linkTitle="Download Satzung"
      />
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Antrag auf Fördermittel"
        description="Hier befindet sich der Antrag auf Zuschuss oder Kostenübernahme durch den Förderverein."
        link="{base}/downloads/Fördermittel Förderverein.pdf"
        linkTitle="Download Antrag auf Fördermittel"
      />
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Eintragung"
        description="Hier kannst du die Eintragung finden."
        link="{base}/downloads/Eintragung Förderverein Wahn Thüringen e. V. .pdf"
        linkTitle="Download Eintragung"
      />
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Gemeinnützigkeit"
        description="Hier kannst du die Gemeinnützigkeit finden."
        link="{base}/downloads/Gemeinnützigkeit Förderverein FA Erfurt .pdf"
        linkTitle="Download Gemeinnützigkeit"
      />
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Mitgliedsantrag"
        description="Hier kannst du den Mitgliedsantrag finden."
        link="{base}/downloads/Mitgliedsantrag_Foerderverein[1].pdf"
        linkTitle="Download Mitgliedsantrag"
      />
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Beitragsordnung"
        description="Hier kannst du die Beitragsordnung finden."
        link="{base}/downloads/unterschriebene_Beitragsordnung_Foerderverein_24-11-25[1].pdf"
        linkTitle="Download Beitragsordnung"
      />
    </div>
  </div>
</section>


