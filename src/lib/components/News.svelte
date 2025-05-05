<script lang="ts">
  import WaveTop from "./WaveTop.svelte";
  import WaveBottom from "./WaveBottom.svelte";

  import { base } from '$app/paths';

  interface Media {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    poster?: string; 
    youtubeId?: string; 
  }

  interface CardProps {
    id: string;
    date: string;
    title: string;
    description: string;
    media: Media[];
  }
  
  const newsCards: CardProps[] = [
    {
      id: 'News7',
      date: '18.4.25 - 21.4.25',
      title: 'Handballjugend (Jg. 2013-2014) beim internationalen Handballcup in Kolding zu Besuch',
      description: 'Während alle anderen bei bestem Wetter Ostereier suchen, begab sich die D- und E-Jugend zu einem der größten internationalen Handballturniere nach Kolding (Dänemark). 250 Mannschaften (Altersklassen männlich und weiblich von U11-U16), 6 Nationen und 8 verschiedene Spielorte haben dieses sehr gut organisierte Turnier zu einem unvergesslichen Erlebnis für die Mädchen gemacht. Nach einer spektakulären Eröffnungsfeier mit über 3000 Gästen begannen am Samstag die Gruppenspiele. Mit Siegen in beiden Altersklassen qualifizierten sich beide Mannschaften für die Platzierungsspiele. Mit lautstarker Unterstützung gaben die Mädels alles und wuchsen über sich hinaus. Am Ende hieß es dann Platz 4 für die D-Jugend und Silber 🥈 für die E-Jugend. Beide Mannschaften durften aufs Treppchen und sich bei der Siegerehrung gebührend feiern lassen. Ein großer DANK gilt allen Unterstützern, die dieses Projekt ermöglicht haben.',
      media: [
        { type: 'image', src: `${base}/images/kolding_cup/gruppenbild_1.webp`, alt: 'Bild' },
        { type: 'image', src: `${base}/images/kolding_cup/gruppenbild_2.webp`, alt: 'Bild' },
        { type: 'image', src: `${base}/images/kolding_cup/gruppenbild_3.webp`, alt: 'Bild' },
        { type: 'image', src: `${base}/images/kolding_cup/gruppenbild_4.webp`, alt: 'Bild' },
        { type: 'image', src: `${base}/images/kolding_cup/eröffnungsfeier.webp`, alt: 'Bild' },
        { type: 'image', src: `${base}/images/kolding_cup/podium.webp`, alt: 'Bild' },
        { type: 'image', src: `${base}/images/kolding_cup/werbungstafel.webp`, alt: 'Bild' },
        { 
          type: 'video',
          src: `${base}/images/kolding_cup/highlights.mp4`, 
          alt: 'Highlights Video'
        },
      ]
    },
    {
      id: 'News6',
      date: 'November 2024 | Erfurt',
      title: 'HEINZE & KOLLEGEN unterstützen die Minis',
      description: 'Dank der nagelneuen Torabhängungen von HEINZE & KOLLEGEN können die Kleinsten nun endlich wettkampfgerecht trainieren. Eine wundervolle Geste unseres Unterstützers. ',
      media: [
        { type: 'image', src: `${base}/images/HeinzeundKollegenUnterstminis.webp` , alt: 'Bild: Heinze und Kollegen unterstützen minis'}
      ]
    },
    {
      id: 'News5',
      date: '27.10.2024 | Erfurt',
      title: '„Girls Cup“ 🤾',
      description: 'Am vergangenen Sonntag fand das erste selbst organisierte Turnier des Förderverein weiblicher Handballnachwuchs Thüringen e.V. statt. Sechs Mannschaften (HC Leipzig, TUS Dieskau, HSG Saalfeld und THC) traten gegeneinander an und schenkten sich dabei nichts. Die mitgereisten Fans und zahlreiche Zuschauer sorgten für ordentlich Stimmung in der „Blechbüchse“. Am Ende des Tages nahm der TUS Dieskau den Pokal 🏆 mit nach Hause. Danke an alle Vereine, die die Anreise auf sich genommen haben. Fortsetzung folgt ✋.',
      media: [
        { type: 'image', src: `${base}/images/Hallenbild_2024_1.webp`, alt: 'Bild: Hallenbild 1' },
        { type: 'image', src: `${base}/images/Hallenbild_2024_2.webp`, alt: 'Bild: Hallenbild 2' },
        { type: 'image', src: `${base}/images/Hallenbild_2024_3.webp`, alt: 'Bild: Hallenbild 3' },
        { type: 'image', src: `${base}/images/Hallenbild_2024_4.webp`, alt: 'Bild: Hallenbild 4' },
        { type: 'image', src: `${base}/images/Hallenbild_2024_5.webp`, alt: 'Bild: Hallenbild 5' },
        { type: 'image', src: `${base}/images/Hallenbild_2024_6.webp`, alt: 'Bild: Hallenbild 6' },
      ]
    },
    {
      id: 'News1',
      date: 'Jeden Montag 16.00-16.45',
      title: 'Förderverein meets JUMPING FITNESS',
      description: '„Richtig cool“, so das Feedback der Kinder und Eltern, die heute erstmals am JUMPING FITNESS im EASYFITNESS in Erfurt teilgenommen. Jeden Montag von 16.00-16.45 Uhr findet ein Kurs von jung bis alt statt. Wer Lust hat sich auszupowern und „auf Touren“ zu kommen kann sich gerne bei uns melden. Wir sind auf jeden Fall das nächste Mal wieder dabei.',
      media: [
        { type: 'image', src: `${base}/images/Förderverein_JUMPING_Fitness.webp` , alt: 'Bild: Förderverein JUMPING Fitness'},
        { type: 'image', src: `${base}/images/Pennewiss_Fitness_Instagram.webp`, alt: 'Bild: Pennewiss Fitness Instagram'}
      ]
    },
    {
      id: 'News2',
      date: '11.10.2024 | Erfurt',
      title: 'Erfolgreiche dm-markt Kassieraktion',
      description: 'Ein großes Dankeschön geht an den dm-Markt im Thüringen Park Erfurt. In einer bisher einmaligen Aktion und mit Unterstützung der Bundesliga Profis Julie Holm & Josefine Hanfland sowie 12 Nachwuchshandballerinnen wurde in einer 2-stündigen Aktion eine unfassbare Summe von 5.700 EUR erwirtschaftet. Die Summe wird zu 100% an den Förderverein gespendet. DANKE an alle Beteiligten, die diese Aktion so erfolgreich gemacht haben.',
      media: [
        { type: 'image', src: `${base}/images/kassieraktion_bild_alle_2024.webp` , alt: `Bild: Kassieraktion`},
        { type: 'image', src: `${base}/images/drogerie_markt_spende_check_2024.webp` , alt: `Bild: Kassieraktion Check`},
        { type: 'image', src: `${base}/images/pdf_kassieraktion_2024.webp` , alt: `Bild: Pdf Kassieraktion`}
      ]
    },
    {
      id: 'News3',
      date: '19.04 - 20.04.2025 | Erfurt',
      title: 'Internationales Handballturnier Kolding 2025',
      description: 'Wir wollen den Mädchen der D-Jugend des THC die Teilnahme an einem der größten Handballturniere ermöglichen.',
      media: [
        { type: 'image', src: `${base}/images/Kolding_Cup_2025.webp` , alt: 'Bild: Kolding Cup 2025'}
      ]
    },
    {
      id: 'News4',
      date: '2024 | Erfurt',
      title: 'Neue Leibchen für den Nachwuchs',
      description: 'Die Leibchen sind bereits im Einsatz, da die Mädels auch in den Ferien fleißig trainiert haben.',
      media: [
        { type: 'image', src: `${base}/images/neue-leibchen-2024.webp`, alt: 'Bild: Neue Leibchen 2024'}
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
        <div class="col-md-5 mb-4 flex-shrink">
          <div class="timeline-date px-4">{card.date}</div>
          <div class="card-content">
            <div id={card.id} class="carousel slide" data-bs-ride="false">
              <div class="carousel-inner">
                {#each card.media as item, index}
                  <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    {#if item.type === 'image'}
                      <img
                        src={item.src}
                        class="card-img-top-content"
                        alt={item.alt}
                      />
                    {:else if item.type === 'video'}
                      {#if item.youtubeId}
                        <div class="ratio ratio-16x9">
                          <iframe 
                            src={`https://www.youtube.com/embed/${item.youtubeId}`}
                            title={item.alt}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                          </iframe>
                        </div>
                      {:else}
                        <div class="video-container">
                          <video 
                            class="card-img-top-content"
                            controls
                            poster={item.poster}
                            preload="none">
                            <source src={item.src} type="video/mp4">
                            Ihr Browser unterstützt keine Videos.
                          </video>
                        </div>
                      {/if}
                    {/if}
                  </div>
                {/each}
              </div>
              {#if card.media.length > 1}
                <button class="carousel-control-prev video-aware-control" type="button" data-bs-target={"#" + card.id} data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next video-aware-control" type="button" data-bs-target={"#" + card.id} data-bs-slide="next">
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

<style>
  /* Video container styling */
  .video-container {
    position: relative;
    width: 100%;
  }
  
  video.card-img-top-content {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  /* Adjust carousel controls for videos */
  .video-aware-control {
    top: auto;
    bottom: 50px; /* Move controls up from the bottom to avoid overlap with video controls */
    opacity: 0.8;
    width: 10%; /* Make controls narrower */
  }
  
  /* Optional: Make controls more visible on hover */
  .video-aware-control:hover {
    opacity: 1;
  }
  
  /* Alternative: Move controls to top portion of carousel only */
  .carousel:has(video) .carousel-control-prev,
  .carousel:has(video) .carousel-control-next {
    height: 70%; /* Only cover the top 70% of the carousel */
    top: 0;
  }
  
  /* Another option: Only show controls on hover */
  .carousel {
    position: relative;
  }
  
  .carousel .carousel-control-prev,
  .carousel .carousel-control-next {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .carousel:hover .carousel-control-prev,
  .carousel:hover .carousel-control-next {
    opacity: 0.8;
  }
</style>
