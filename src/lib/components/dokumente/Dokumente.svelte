<script>
  import Card from './Card.svelte';

  import gemeinnuetzige_einrichungen from '$lib/assets/downloads/Gemeinnützigkeit Förderverein FA Erfurt .pdf';

  import fördermittel from '$lib/assets/downloads/Fördermittel Förderverein.pdf';

  import eintragung from '$lib/assets/downloads/Eintragung Förderverein Wahn Thüringen e. V. .pdf';

  import satzung from '$lib/assets/downloads//Satzung FwHT - Förderverein des weiblichen Handballnachwuchses Thüringen e.V..pdf';

</script>

<section id="documents" class="container my-5">
  <h2 class="text-center mb-4">Dokumente</h2>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Satzung"
        description="Hier findest du die Satzung als PDF zum Download."
        link="{ satzung }"
        linkTitle="Download Satzung"
      />
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Antrag auf Fördermittel"
        description="Hier befindet sich der Antrag auf Zuschuss oder Kostenübernahme durch den Förderverein."
        link="{ fördermittel }"
        linkTitle="Download Antrag auf Fördermittel"
      />
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Eintragung"
        description="Hier kannst du die Eintragung finden."
        link="{ eintragung }"
        linkTitle="Download Eintragung"
      />
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      <Card
        title="Gemeinnützigkeit"
        description="Hier kannst du die Gemeinnützigkeit finden."
        link="{ gemeinnuetzige_einrichungen }"
        linkTitle="Download Gemeinnützigkeit"
      />
    </div>
  </div>
</section>

