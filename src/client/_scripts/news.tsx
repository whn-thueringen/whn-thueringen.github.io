import WaveTop from "./wave_top.tsx";
import WaveBottom from './wave_bottom.tsx';

interface CardProps {
  title: string;
  date: string;
  description: string;

  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;

  imgSrc1Alt: string;
  imgSrc2Alt: string;
  imgSrc3Alt: string;
  
  id: string;
}

const NewsCard1Image = (props: CardProps) => (
  <>
    <div class="col-md-5 mb-1">
      <div class="timeline-date px-4">{props.date}</div>
      <div class="card">
          <div id={props.id} class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src={props.imgSrc1} class="card-img-top" alt={props.imgSrc1Alt} data-bs-toggle="modal" data-bs-target="#Kassieraktion_alle_modal"></img>
                  </div>
              </div>
          </div>
          <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.description}</p>
          </div>
      </div>
  </div>
  </>
);

const NewsCard2Images = (props: CardProps) => (
  <>
    <div class="col-md-5 mb-1">
      <div class="timeline-date px-4">{props.date}</div>
      <div class="card">
          <div id={props.id} class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src={props.imgSrc1} class="card-img-top" alt={props.imgSrc1Alt} data-bs-toggle="modal" data-bs-target="#NewsCard2Images1"></img>
                  </div>
                  <div class="carousel-item">
                      <img src={props.imgSrc2} class="card-img-top" alt={props.imgSrc2Alt} data-bs-toggle="modal" data-bs-target="#NewsCard2Images2"></img>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target={props.id} data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target={props.id} data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>
          <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.description}</p>
          </div>
      </div>
  </div>
  </>
);

const NewsCard3Images = (props: CardProps) => (
  <>
    <div class="col-md-5 mb-1">
      <div class="timeline-date px-4">{props.date}</div>
      <div class="card">
          <div id={props.id} class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src={props.imgSrc1} class="card-img-top" alt={props.imgSrc1Alt} data-bs-toggle="modal" data-bs-target="#NewsCard2Images3"></img>
                  </div>
                  <div class="carousel-item">
                      <img src={props.imgSrc2} class="card-img-top" alt={props.imgSrc2Alt} data-bs-toggle="modal" data-bs-target="#NewsCard2Images4"></img>
                  </div>
                  <div class="carousel-item">
                      <img src={props.imgSrc3} class="card-img-top" alt={props.imgSrc3Alt} data-bs-toggle="modal" data-bs-target="#NewsCard2Images5"></img>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target={props.id} data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target={props.id} data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
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
  <a href="/whn-thueringen.github.io/projekte/" class="btn btn-primary w-25">Alle Projekte</a>
);


const News = () => (
  <>
    <WaveTop></WaveTop>
    <div class="secondary-background">
      <section class="news-section container text-center">
        <h2 class="text-center mb-3">News & Aktuelles</h2>
        <div class="row justify-content-center">
          <NewsCard2Images
              id='News1'
              title="Förderverein meets JUMPING FITNESS"
              date="Jeden Montag 16.00-16.45"
              imgSrc1="./_assets/Förderverein_JUMPING_Fitness.jpg"
              imgSrc2="./_assets/Pennewiss_Fitness_Instagram.png"
              imgSrc3=""
              imgSrc1Alt="Bild: Förderverein JUMPING Fitness"
              imgSrc2Alt="Bild: Pennewiss Fitness Instagram"
              imgSrc3Alt=""
              description="„Richtig cool“, so das Feedback der Kinder und Eltern, die heute erstmals am JUMPING FITNESS im EASYFITNESS in Erfurt teilgenommen. Jeden Montag von 16.00-16.45 Uhr findet ein Kurs von jung bis alt statt.
Wer Lust hat sich auszupowern und „auf Touren“ zu kommen kann sich gerne bei uns melden. Wir sind auf jeden Fall das nächste Mal wieder dabei."
          />
          <NewsCard3Images
              id='News2'
              title="Erfolgreiche dm-markt Kassieraktion"
              date="11.10.2024 | Erfurt"
              imgSrc1="./_assets/kassieraktion_bild_alle_2024.jpg"
              imgSrc2="./_assets/drogerie_markt_spende_check_2024.jpg"
              imgSrc3="./_assets/pdf_kassieraktion_2024.png"
              imgSrc1Alt="Bild: Kassieraktion"
              imgSrc2Alt="Bild: Kassieraktion Check"
              imgSrc3Alt="Bild: Pdf Kassieraktion"
              description="Ein großes Dankeschön geht an den dm-Markt im Thüringen Park Erfurt. In einer bisher einmaligen Aktion und mit Unterstützung der Bundesliga Profis Julie Holm & Josefine Hanfland sowie 12 Nachwuchshandballerinnen wurde in einer 2-stündigen Aktion eine unfassbare Summe von 5.700 EUR erwirtschaftet. Die Summe wird zu 100% an den Förderverein gespendet. DANKE an alle Beteiligten, die diese Aktion so erfolgreich gemacht haben."
            />
            <NewsCard1Image
              id='News3'
              title="Internationales Handballturnier Kolding 2025"
              date="19.04 - 20.04.2025 | Erfurt"
              imgSrc1="./_assets/Kolding_Cup_2025.jpeg"
              imgSrc2=""
              imgSrc3=""
              imgSrc1Alt="Bild: Kolding Cup 2025"
              imgSrc2Alt=""
              imgSrc3Alt=""
              description="Wir wollen den Mädchen der D-Jugend des THC die Teilnahme an einem der größten Handballturniere ermöglichen."
            />
            <NewsCard1Image
              id='News4'
              title="Neue Leibchen für den Nachwuchs"
              date="2024 | Erfurt"
              imgSrc1="./_assets/neue-leibchen-2024.jpg"
              imgSrc2=""
              imgSrc3=""
              imgSrc1Alt="Bild: Neue Leibchen 2024"
              imgSrc2Alt=""
              imgSrc3Alt=""
              description="Die Leibchen sind bereits im Einsatz, da die Mädels auch in den Ferien fleißig trainiert haben."
            />
        </div>
        <AllProjectsButton></AllProjectsButton>
      </section>
    </div>
    <WaveBottom></WaveBottom>
  </>
);

export default News;