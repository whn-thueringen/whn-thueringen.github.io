import WaveTop from "./wave_top.tsx";
import WaveBottom from './wave_bottom.tsx';

import { For } from 'solid-js';

interface Image {
  src: string;
  alt: string;
  modalId: string;
}

interface CardProps {
  id: string;
  date: string;
  title: string;
  description: string;
  images: Image[];
  target: string;
}

const NewsCard = (props: CardProps) => (
  <>
    <div class="col-md-5 mb-1">
      <div class="timeline-date px-4">{props.date}</div>
      <div class="card">
        <div id={props.id} class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <For each={props.images}>
              {(image, index) => (
                <div class={`carousel-item ${index() === 0 ? 'active' : ''}`}>
                  <img
                    src={image.src}
                    class="card-img-top"
                    alt={image.alt}
                    data-bs-toggle="modal"
                    data-bs-target={image.modalId}
                  />
                </div>
              )}
            </For>
          </div>
          {props.images.length > 1 && (
            <>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target={props.target}
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target={props.target}
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </>
          )}
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  </>
);


const AllProjectsButton = () => (
  <a href="/whn-thueringen.github.io/projekte/" class="btn btn-primary">Alle Projekte</a>
);


const News = () => (
  <>
    <WaveTop></WaveTop>
    <div class="secondary-background">
      <section class="news-section container text-center">
        <h2 class="text-center mb-3">News & Aktuelles</h2>
        <div class="row justify-content-center">
        <NewsCard
              id='News1'
              target="#News1"
              title="\u{201e}Girls Cup\u{201c} \u{1f93e}"
              date="Jeden Montag 16.00-16.45"
              description="Am vergangenen Sonntag fand das erste selbst organisierte  Turnier des F\u{00f6}rderverein weiblicher Handballnachwuchs Th\u{00fc}ringen e.V. statt. Sechs Mannschaften (HC Leipzig, TUS Dieskau, HSG Saalfeld und THC) traten gegen einander an und schenkten sich dabei nichts. Die mitgereisten Fans und zahlreiche Zuschauer sorgten f\u{00fc}r ordentlich Stimmung in der \u{201e}Blechb\u{00fc}chse\u{201c}. Am Ende des Tages nahm der TUS Dieskau den Pokal \u{1f3c6} mit nach Hause. Danke an alle Vereine, die die Anreise auf sich genommen haben. Fortsetzung folgt \u{1f596}."
              images={[
                { src: "webp", alt: "Bild", modalId: "#NewsModal6" },
                { src: "webp", alt: "Bild", modalId: "#NewsModal7" }
              ]}
            />
          <NewsCard
              id='News1'
              target="#News1"
              title="F\u{00f6}rderverein meets JUMPING FITNESS"
              date="Jeden Montag 16.00-16.45"
              description="\u{201e}Richtig cool\u{201c}, so das Feedback der Kinder und Eltern, die heute erstmals am JUMPING FITNESS im EASYFITNESS in Erfurt teilgenommen. Jeden Montag von 16.00-16.45 Uhr findet ein Kurs von jung bis alt statt.
Wer Lust hat sich auszupowern und \u{201e}auf Touren\u{201c} zu kommen kann sich gerne bei uns melden. Wir sind auf jeden Fall das nächste Mal wieder dabei."
              images={[
                { src: "./_assets/images/Förderverein_JUMPING_Fitness.webp", alt: "Bild: Förderverein JUMPING Fitness", modalId: "#NewsModal6" },
                { src: "./_assets/images/Pennewiss_Fitness_Instagram.webp", alt: "Bild: Pennewiss Fitness Instagram", modalId: "#NewsModal7" }
              ]}
            />
          <NewsCard
              id='News2'
              target="#News2"
              title="Erfolgreiche dm-markt Kassieraktion"
              date="11.10.2024 | Erfurt"
              description="Ein großes Dankeschön geht an den dm-Markt im Thüringen Park Erfurt. In einer bisher einmaligen Aktion und mit Unterstützung der Bundesliga Profis Julie Holm & Josefine Hanfland sowie 12 Nachwuchshandballerinnen wurde in einer 2-stündigen Aktion eine unfassbare Summe von 5.700 EUR erwirtschaftet. Die Summe wird zu 100% an den Förderverein gespendet. DANKE an alle Beteiligten, die diese Aktion so erfolgreich gemacht haben."
              images={[
                { src: "./_assets/images/kassieraktion_bild_alle_2024.webp", alt: "Bild: Kassieraktion", modalId: "#NewsModal3" },
                { src: "./_assets/images/drogerie_markt_spende_check_2024.webp", alt: "Bild: Kassieraktion Check", modalId: "#NewsModal4" },
                { src: "./_assets/images/pdf_kassieraktion_2024.webp", alt: "Bild: Pdf Kassieraktion", modalId: "#NewsModal5" }
              ]}
            />
            <NewsCard
              id='News3'
              target="#News3"            
              title="Internationales Handballturnier Kolding 2025"
              date="19.04 - 20.04.2025 | Erfurt"
              description="Wir wollen den Mädchen der D-Jugend des THC die Teilnahme an einem der größten Handballturniere ermöglichen."
              images={[
                { src: "./_assets/images/Kolding_Cup_2025.webp", alt: "Bild: Kolding Cup 2025", modalId: "#NewsModal1" }
              ]}
            />
            <NewsCard
              id='News4'
              target="#News4"          
              title="Neue Leibchen für den Nachwuchs"
              date="2024 | Erfurt"
              description="Die Leibchen sind bereits im Einsatz, da die Mädels auch in den Ferien fleißig trainiert haben."
              images={[
                { src: "./_assets/images/neue-leibchen-2024.webp", alt: "Bild: Neue Leibchen 2024", modalId: "#NewsModal2" }
              ]}
            />
        </div>
        <AllProjectsButton></AllProjectsButton>
      </section>
    </div>
    <WaveBottom></WaveBottom>
  </>
);

export default News;