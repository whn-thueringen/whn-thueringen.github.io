<script lang="ts">
  import WaveTop from "./WaveTop.svelte";
  import WaveBottom from "./WaveBottom.svelte";

  import { base } from '$app/paths';

  interface Image {
    src: string;
    alt: string;
  }

  interface CardProps {
    id: string;
    date: string;
    title: string;
    description: string;
    images: Image[];
  }
  
  const newsCards: CardProps[] = [
    {
      id: 'News7',
      date: 'November 2024 | Erfurt',
      title: 'HEINZE & KOLLEGEN unterstützen die Minis',
      description: 'Dank der nagelneuen Torabhängungen von HEINZE & KOLLEGEN können die Kleinsten nun endlich wettkampfgerecht trainieren. Eine wundervolle Geste unseres Unterstützers. ',
      images: [
        { src: `${base}/images/HeinzeundKollegenUnterstminis.webp` , alt: 'Bild: Heinze und Kollegen unterstützen minis'}
      ]
    },
    { 
      id: 'News5',
      date: '27.10.2024 | Erfurt',
      title: '„Girls Cup“ 🤾',
      description: 'Am vergangenen Sonntag fand das erste selbst organisierte Turnier des Förderverein weiblicher Handballnachwuchs Thüringen e.V. statt. Sechs Mannschaften (HC Leipzig, TUS Dieskau, HSG Saalfeld und THC) traten gegeneinander an und schenkten sich dabei nichts. Die mitgereisten Fans und zahlreiche Zuschauer sorgten für ordentlich Stimmung in der „Blechbüchse“. Am Ende des Tages nahm der TUS Dieskau den Pokal 🏆 mit nach Hause. Danke an alle Vereine, die die Anreise auf sich genommen haben. Fortsetzung folgt ✋.',
      images: [
        { src: `${base}/images/Hallenbild_2024_1.webp`, alt: 'Bild: Hallenbild 1' },
        { src: `${base}/images/Hallenbild_2024_2.webp`, alt: 'Bild: Hallenbild 2' },
        { src: `${base}/images/Hallenbild_2024_3.webp`, alt: 'Bild: Hallenbild 3' },
        { src: `${base}/images/Hallenbild_2024_4.webp`, alt: 'Bild: Hallenbild 4' },
        { src: `${base}/images/Hallenbild_2024_5.webp`, alt: 'Bild: Hallenbild 5' },
        { src: `${base}/images/Hallenbild_2024_6.webp`, alt: 'Bild: Hallenbild 6' },
      ]
    },
    {
      id: 'News1',
      date: 'Jeden Montag 16.00-16.45',
      title: 'Förderverein meets JUMPING FITNESS',
      description: '„Richtig cool“, so das Feedback der Kinder und Eltern, die heute erstmals am JUMPING FITNESS im EASYFITNESS in Erfurt teilgenommen. Jeden Montag von 16.00-16.45 Uhr findet ein Kurs von jung bis alt statt. Wer Lust hat sich auszupowern und „auf Touren“ zu kommen kann sich gerne bei uns melden. Wir sind auf jeden Fall das nächste Mal wieder dabei.',
      images: [
        { src: `${base}/images/Förderverein_JUMPING_Fitness.webp` , alt: 'Bild: Förderverein JUMPING Fitness'},
        { src: `${base}/images/Pennewiss_Fitness_Instagram.webp`, alt: 'Bild: Pennewiss Fitness Instagram'}
      ]
    },
    {
      id: 'News2',
      date: '11.10.2024 | Erfurt',
      title: 'Erfolgreiche dm-markt Kassieraktion',
      description: 'Ein großes Dankeschön geht an den dm-Markt im Thüringen Park Erfurt. In einer bisher einmaligen Aktion und mit Unterstützung der Bundesliga Profis Julie Holm & Josefine Hanfland sowie 12 Nachwuchshandballerinnen wurde in einer 2-stündigen Aktion eine unfassbare Summe von 5.700 EUR erwirtschaftet. Die Summe wird zu 100% an den Förderverein gespendet. DANKE an alle Beteiligten, die diese Aktion so erfolgreich gemacht haben.',
      images: [
        { src: `${base}/images/kassieraktion_bild_alle_2024.webp` , alt: `Bild: Kassieraktion`},
        { src: `${base}/images/drogerie_markt_spende_check_2024.webp` , alt: `Bild: Kassieraktion Check`},
        { src: `${base}/images/pdf_kassieraktion_2024.webp` , alt: `Bild: Pdf Kassieraktion`}
      ]
    },
    {
      id: 'News3',
      date: '19.04 - 20.04.2025 | Erfurt',
      title: 'Internationales Handballturnier Kolding 2025',
      description: 'Wir wollen den Mädchen der D-Jugend des THC die Teilnahme an einem der größten Handballturniere ermöglichen.',
      images: [
        { src: `${base}/images/Kolding_Cup_2025.webp` , alt: 'Bild: Kolding Cup 2025'}
      ]
    },
    {
      id: 'News4',
      date: '2024 | Erfurt',
      title: 'Neue Leibchen für den Nachwuchs',
      description: 'Die Leibchen sind bereits im Einsatz, da die Mädels auch in den Ferien fleißig trainiert haben.',
      images: [
        { src: `${base}/images/neue-leibchen-2024.webp`, alt: 'Bild: Neue Leibchen 2024'}
      ]
    }
  ];
</script>

<WaveTop />

<div id="News" class="secondary-background">
  <section class="news-section container text-center">
    <h2 class="text-center mb-3">News & Aktuelles</h2>
    <div class="row justify-content-center">
      {#each newsCards as card}
        <div class="col-md-5 mb-1 flex-shrink">
          <div class="timeline-date px-4">{card.date}</div>
          <div class="card-content">
            <div id={card.id} class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                {#each card.images as image, index}
                  <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img
                      src={image.src}
                      class="card-img-top-content"
                      alt={image.alt}
                    />
                  </div>
                {/each}
              </div>
              {#if card.images.length > 1}
                <button class="carousel-control-prev" type="button" data-bs-target={"#" + card.id} data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target={"#" + card.id} data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              {/if}
            </div>
            <div class="card-body">
              <h5 class="card-title">{card.title}</h5>
              <p class="card-text">{card.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <a href="{base}/projekte/" class="btn-own">Alle Projekte</a>
  </section>
</div>

<WaveBottom />
