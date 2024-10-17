
interface CardProps {
  title: string;
  date: string;
  description: string;
  link: string;

  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;

  imgSrc1Alt: string;
  imgSrc2Alt: string;
  imgSrc3Alt: string;

  id: string;
}

const CardContent1Image = ( props: CardProps ) => (
  <>
    <div class="timeline-date px-4 text-center">{props.date}</div>
    <div class="card d-flex flex-column flex-md-row">
      <div class="col-md-6">
        <img src={props.imgSrc1} alt={props.imgSrc1Alt} class={props.imgSrc1Alt}></img>
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.link} class="btn btn-primary" target="_blank">Unterstützen</a>
        </div>
      </div>
    </div>
  </>
);

const _CardContent2Images = ( props: CardProps ) => (
  <>
    <div class="timeline-date px-4 text-center">{props.date}</div>
    <div class="card d-flex flex-column flex-md-row">
    <div id={props.id} class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src={props.imgSrc1} class="card-img-top" alt={props.imgSrc1Alt} data-bs-toggle="modal" data-bs-target="#Kassieraktion_alle_modal"></img>
              </div>
              <div class="carousel-item">
                  <img src={props.imgSrc2} class="card-img-top" alt={props.imgSrc2Alt} data-bs-toggle="modal" data-bs-target="#Kassieraktion_check_modal"></img>
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
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.link} class="btn btn-primary" target="_blank">Unterstützen</a>
        </div>
      </div>
    </div>
  </>
);

const CardContent3Images = ( props: CardProps ) => (
  <>
    <div class="timeline-date px-4 text-center">{props.date}</div>
    <div class="card d-flex flex-column flex-md-row">
    <div id={props.id} class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src={props.imgSrc1} class="card-img-top" alt={props.imgSrc1Alt} data-bs-toggle="modal" data-bs-target="#Kassieraktion_alle_modal"></img>
              </div>
              <div class="carousel-item">
                  <img src={props.imgSrc2} class="card-img-top" alt={props.imgSrc2Alt} data-bs-toggle="modal" data-bs-target="#Kassieraktion_check_modal"></img>
              </div>
              <div class="carousel-item">
                  <img src={props.imgSrc3} class="card-img-top" alt={props.imgSrc3Alt} data-bs-toggle="modal" data-bs-target="#Kassieraktion_check_modal"></img>
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
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.link} class="btn btn-primary" target="_blank">Unterstützen</a>
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
            <CardContent1Image
              id='Project1'
              title="Internationales Handballturnier Kolding 2025"
              date="19.04. - 20.04.2025 | Erfurt"
              imgSrc1="../_assets/Kolding_Cup_2025.jpeg"
              imgSrc2=""  
              imgSrc3=""
              imgSrc1Alt="Kolding Cup 2025"
              imgSrc2Alt=""
              imgSrc3Alt=""
              description="Wir wollen den Mädchen der D-Jugend des THC die Teilnahme an einem der größten Handballturniere ermöglichen und uns im internationalen Vergleich mit Topteams messen."
              link="https://www.betterplace.org/de/projects/141469-mit-der-handballjugend-zum-kolding-cup-2025"
            />
            <CardContent3Images
              id='Project2'
              title="Erfolgreiche dm-markt Kassieraktion"
              date="11.10.2024 | Erfurt"
              imgSrc1="../_assets/kassieraktion_bild_alle_2024.jpg"
              imgSrc2="../_assets/drogerie_markt_spende_check_2024.jpg"
              imgSrc3="../_assets/pdf_kassieraktion_2024.png"
              imgSrc1Alt="Bild: Kassieraktion"
              imgSrc2Alt="Bild: Kassieraktion Check"
              imgSrc3Alt="Bild: Pdf Kassieraktion"
              description="Ein großes Dankeschön geht an den dm-Markt im Thüringen Park Erfurt. In einer bisher einmaligen Aktion und mit Unterstützung der Bundesliga Profis Julie Holm & Josefine Hanfland sowie 12 Nachwuchshandballerinnen wurde in einer 2-stündigen Aktion eine unfassbare Summe von 5.700 EUR erwirtschaftet. Die Summe wird zu 100% an den Förderverein gespendet. DANKE an alle Beteiligten, die diese Aktion so erfolgreich gemacht haben."
              link=""
            />
            <CardContent1Image
              id='Project3'
              title="1. Handballcamp des Fördervereins"
              date="30.09. - 02.10.2024 | Erfurt"
              imgSrc1="../_assets/Handballcamp_2024.jpeg"
              imgSrc2=""  
              imgSrc3=""
              imgSrc1Alt="1. Handballcamp des Fördervereins"
              imgSrc2Alt=""
              imgSrc3Alt=""
              description="In der ersten Hälfte der Oktoberferien fand unser erstes  3-tägiges Handballcamp im Sportgymnasium Erfurt statt. Unter der Leitung von Ruben Arnold und Steffen Ahrens hatten 13 Kinder (8-11 Jahre) zahlreiche Trainingseinheiten. Es wurde nicht nur der Spaß am Handball vermittelt, sondern auch an verschieden Skills gearbeitet. Zu Gast war u.a. Nationalspielerin Kim Ott, welche den Kindern beim Training über die Schultern blickte. Danke an alle Unterstützer, die das Camp mit gefördert haben. Das nächste Camp folgt sicher."
              link=""
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Projekte;