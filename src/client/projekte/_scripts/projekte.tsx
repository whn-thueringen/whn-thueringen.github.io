import { For, Show } from 'solid-js';

interface Image {
  src: string;
  alt: string;
  modalId: string;
}

interface CardProps {
  date: string;
  images: Image[];
  title: string;
  description: string;
  link: string;
  linkClass: string;
  linkText: string;
  target: string;
  id: string;
}

const ProjectCard = (props: CardProps) => (
  <>
    <div class="timeline-date px-4 text-center">{props.date}</div>
    <div class="card d-flex flex-column flex-md-row">
      <div class="col-md-6">
        <div id={props.target} class="carousel slide" data-bs-ride="carousel">
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
          <Show when={props.images.length > 1}>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target={`#${props.target}`}
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target={`#${props.target}`}
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </Show>
        </div>
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.link} class={props.linkClass} target="_blank">
            {props.linkText}
          </a>
        </div>
      </div>
    </div>
  </>
);

const Projekte = () => (
  <>
    <div>
      <h1 class="text-center">Projekte</h1>
      <div class="timeline">
        <div class="row justify-content-center">
          <div class="col-md-10 mb-4">
          <ProjectCard
              id='Project4'
              target="#Project4"
              title="„Girls Cup“ 🤾🏼‍♀️"
              date="19.04. - 20.04.2025 | Erfurt"
              description="Am vergangenen Sonntag fand das erste selbst organisierte Turnier des Förderverein weiblicher Handballnachwuchs Thüringen e.V. statt. Sechs Mannschaften (HC Leipzig, TUS Dieskau, HSG Saalfeld und THC) traten gegen einander an und schenkten sich dabei nichts. Die mitgereisten Fans und zahlreiche Zuschauer sorgten für ordentlich Stimmung in der „Blechbüchse“. Am Ende des Tages nahm der TUS Dieskau den Pokal 🏆 mit nach Hause. Danke an alle Vereine, die die Anreise auf sich genommen haben. Fortsetzung folgt 🖖."
              link="https://www.betterplace.org/de/projects/141469-mit-der-handballjugend-zum-kolding-cup-2025"
              linkText=''
              linkClass=''
              images={[
                { src: "webp", alt: "Kolding", modalId: "#NewsModal6" },
                { src: "webp", alt: "Kolding", modalId: "#NewsModal6" },
                { src: "webp", alt: "Kolding", modalId: "#NewsModal6" },
                { src: "webp", alt: "Kolding", modalId: "#NewsModal6" },
              ]}
            />
            <ProjectCard
              id='Project1'
              target="#Project1"
              title="Internationales Handballturnier Kolding 2025"
              date="19.04. - 20.04.2025 | Erfurt"
              description="Wir wollen den Mädchen der D-Jugend des THC die Teilnahme an einem der größten Handballturniere ermöglichen und uns im internationalen Vergleich mit Topteams messen."
              link="https://www.betterplace.org/de/projects/141469-mit-der-handballjugend-zum-kolding-cup-2025"
              linkText='Unterstützen'
              linkClass='btn btn-primary'
              images={[
                { src: "../_assets/images/Kolding_Cup_2025.webp", alt: "Kolding Cup 2025", modalId: "#NewsModal6" }
              ]}
            />
            <ProjectCard
              id='Project2'
              target="#Project2"
              title="Erfolgreiche dm-markt Kassieraktion"
              date="11.10.2024 | Erfurt"
              description="Ein großes Dankeschön geht an den dm-Markt im Thüringen Park Erfurt. In einer bisher einmaligen Aktion und mit Unterstützung der Bundesliga Profis Julie Holm & Josefine Hanfland sowie 12 Nachwuchshandballerinnen wurde in einer 2-stündigen Aktion eine unfassbare Summe von 5.700 EUR erwirtschaftet. Die Summe wird zu 100% an den Förderverein gespendet. DANKE an alle Beteiligten, die diese Aktion so erfolgreich gemacht haben."
              link=""
              linkText=''
              linkClass=''
              images={[
                { src: "../_assets/images/kassieraktion_bild_alle_2024.webp", alt: "Bild: Kassieraktion", modalId: "#NewsModal3" },
                { src: "../_assets/images/drogerie_markt_spende_check_2024.webp", alt: "Bild: Kassieraktion Check", modalId: "#NewsModal4" },
                { src: "../_assets/images/pdf_kassieraktion_2024.webp", alt: "Bild: Pdf Kassieraktion", modalId: "#NewsModal5" }
              ]}
            />
            <ProjectCard
              id='Project3'
              target="#Project3"
              title="1. Handballcamp des Fördervereins"
              date="30.09. - 02.10.2024 | Erfurt"
              description="In der ersten Hälfte der Oktoberferien fand unser erstes  3-tägiges Handballcamp im Sportgymnasium Erfurt statt. Unter der Leitung von Ruben Arnold und Steffen Ahrens hatten 13 Kinder (8-11 Jahre) zahlreiche Trainingseinheiten. Es wurde nicht nur der Spaß am Handball vermittelt, sondern auch an verschieden Skills gearbeitet. Zu Gast war u.a. Nationalspielerin Kim Ott, welche den Kindern beim Training über die Schultern blickte. Danke an alle Unterstützer, die das Camp mit gefördert haben. Das nächste Camp folgt sicher."
              link=""
              linkText=''
              linkClass=''
              images={[
                { src: "../_assets/images/Handballcamp_2024.webp", alt: "Bild", modalId: "#ProjectModal1" },
                { src: "webp", alt: "1. Handballcamp des Fördervereins", modalId: "#ProjectModal2" }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Projekte;