<script>
  import ProjectCard from './Card.svelte';

  import { base } from '$app/paths';

  import Kolding_Cup_2025 from '/images/Kolding_Cup_2025.webp';

  import kassieraktion_bild_alle_2024 from '/images/kassieraktion_bild_alle_2024.webp';
  import drogerie_markt_spende_check_2024 from '/images/drogerie_markt_spende_check_2024.webp';
  import pdf_kassieraktion_2024 from '/images/pdf_kassieraktion_2024.webp';

  import Handballcamp_2024 from '/images/Handballcamp_2024.webp';
</script>

<div>
  <h1 class="text-center">Projekte</h1>
  <div class="timeline">
    <div class="row justify-content-center">
      <div class="col-md-10 mb-4">
        <ProjectCard
          target="Project4"
          title="„Girls Cup“ 🤾🏼‍♀️"
          date="27.10.2024 | Erfurt"
          description="Am vergangenen Sonntag fand das erste selbst organisierte Turnier des Förderverein weiblicher Handballnachwuchs Thüringen e.V. statt. Sechs Mannschaften (HC Leipzig, TUS Dieskau, HSG Saalfeld und THC) traten gegen einander an und schenkten sich dabei nichts. Die mitgereisten Fans und zahlreiche Zuschauer sorgten für ordentlich Stimmung in der „Blechbüchse“. Am Ende des Tages nahm der TUS Dieskau den Pokal 🏆 mit nach Hause. Danke an alle Vereine, die die Anreise auf sich genommen haben. Fortsetzung folgt 🖖."
          link="https://www.betterplace.org/de/projects/141469-mit-der-handballjugend-zum-kolding-cup-2025"
          linkText=""
          linkClass=""
          images={[
        { src: `${base}/images/Hallenbild_2024_1.webp`, alt: 'Bild: Hallenbild 1' },
        { src: `${base}/images/Hallenbild_2024_2.webp`, alt: 'Bild: Hallenbild 2' },
        { src: `${base}/images/Hallenbild_2024_3.webp`, alt: 'Bild: Hallenbild 3' },
        { src: `${base}/images/Hallenbild_2024_4.webp`, alt: 'Bild: Hallenbild 4' },
        { src: `${base}/images/Hallenbild_2024_5.webp`, alt: 'Bild: Hallenbild 5' },
        { src: `${base}/images/Hallenbild_2024_6.webp`, alt: 'Bild: Hallenbild 6' },
          ]}
        />
        <ProjectCard
          target="Project1"
          title="Internationales Handballturnier Kolding 2025"
          date="19.04. - 20.04.2025 | Erfurt"
          description="Wir wollen den Mädchen der D-Jugend des THC die Teilnahme an einem der größten Handballturniere ermöglichen und uns im internationalen Vergleich mit Topteams messen."
          link="https://www.betterplace.org/de/projects/141469-mit-der-handballjugend-zum-kolding-cup-2025"
          linkText="Unterstützen"
          linkClass="btn-own"
          images={[
        { src: `${base}/images/Kolding_Cup_2025.webp` , alt: 'Bild: Kolding Cup 2025'}
          ]}
        />
        <ProjectCard
          target="Project2"
          title="Erfolgreiche dm-markt Kassieraktion"
          date="11.10.2024 | Erfurt"
          description="Ein großes Dankeschön geht an den dm-Markt im Thüringen Park Erfurt. In einer bisher einmaligen Aktion und mit Unterstützung der Bundesliga Profis Julie Holm & Josefine Hanfland sowie 12 Nachwuchshandballerinnen wurde in einer 2-stündigen Aktion eine unfassbare Summe von 5.700 EUR erwirtschaftet. Die Summe wird zu 100% an den Förderverein gespendet. DANKE an alle Beteiligten, die diese Aktion so erfolgreich gemacht haben."
          link=""
          linkText=""
          linkClass=""
          images={[
        { src: `${base}/images/kassieraktion_bild_alle_2024.webp` , alt: `Bild: Kassieraktion`},
        { src: `${base}/images/drogerie_markt_spende_check_2024.webp` , alt: `Bild: Kassieraktion Check`},
        { src: `${base}/images/pdf_kassieraktion_2024.webp` , alt: `Bild: Pdf Kassieraktion`}
          ]}
        />
        <ProjectCard
          target="Project3"
          title="1. Handballcamp des Fördervereins"
          date="30.09. - 02.10.2024 | Erfurt"
          description="In der ersten Hälfte der Oktoberferien fand unser erstes 3-tägiges Handballcamp im Sportgymnasium Erfurt statt. Unter der Leitung von Ruben Arnold und Steffen Ahrens hatten 13 Kinder (8-11 Jahre) zahlreiche Trainingseinheiten. Es wurde nicht nur der Spaß am Handball vermittelt, sondern auch an verschieden Skills gearbeitet. Zu Gast war u.a. Nationalspielerin Kim Ott, welche den Kindern beim Training über die Schultern blickte. Danke an alle Unterstützer, die das Camp mit gefördert haben. Das nächste Camp folgt sicher."
          link=""
          linkText=""
          linkClass=""
          images={[
            { src: `${base}/images/Handballcamp_2024.webp`, alt: "Bild", modalId: "#ProjectModal1" }
          ]}
        />
      </div>
    </div>
  </div>
</div>
