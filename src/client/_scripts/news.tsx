import type { ParentProps } from 'solid-js';
import WaveTop from "./wave_top.tsx";
import WaveBottom from './wave_bottom.tsx';

const BackgroundWrapper = (props: ParentProps) => (
  <div class="secondary-background">{props.children}</div>
);

const Wrapper = (props: ParentProps) => (
  <section class="news-section container text-center">{props.children}</section>
);

const NewsHeader = () => (
  <h2 class="text-center mb-3">News & Aktuelles</h2>
);

const NewsWrapper = (props: ParentProps) => (
  <header class="text-center pt-4 pb-3">{props.children}</header>
);

const NewsContent1 = () => (
  <>
    <div class="col-md-5 mb-1">
      <div class="timeline-date px-4">11.10.2024 | Erfurt</div>
      <div class="card">
          <div id="newsCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="./_assets/kassieraktion_bild_alle_2024.jpg" class="card-img-top" alt="News Bild 1" data-bs-toggle="modal" data-bs-target="#Kassieraktion_alle_modal"></img>
                  </div>
                  <div class="carousel-item">
                      <img src="./_assets/drogerie_markt_spende_check_2024.jpg" class="card-img-top" alt="News Bild 2" data-bs-toggle="modal" data-bs-target="#Kassieraktion_check_modal"></img>
                  </div>
                  <div class="carousel-item">
                      <img src="./_assets/pdf_kassieraktion_2024.png" class="card-img-top" alt="News Bild 3" data-bs-toggle="modal" data-bs-target="#Kassieraktion_pdf_modal"></img>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#newsCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>
          <div class="card-body">
              <h5 class="card-title">Erfolgreiche dm-markt Kassieraktion</h5>
              <p class="card-text">Ein großes Dankeschön geht an den dm-Markt im Thüringen Park Erfurt. In einer bisher einmaligen Aktion und mit Unterstützung der Bundesliga Profis Julie Holm & Josefine Hanfland sowie 12 Nachwuchshandballerinnen wurde in einer 2-stündigen Aktion eine unfassbare Summe von 5.700 EUR erwirtschaftet. Die Summe wird zu 100% an den Förderverein gespendet. DANKE an alle Beteiligten, die diese Aktion so erfolgreich gemacht haben.</p>
          </div>
      </div>
  </div>
  </>
);

const NewsContent2 = () => (
  <>
    <div class="col-md-4 mb-1">
      <div class="timeline-date px-4">19.04 - 20.04.2025 | Erfurt</div>
      <div class="card">
        <img src="_assets/Kolding_Cup_2025.jpeg" class="card-img-top" alt="News 1" data-bs-toggle="modal" data-bs-target="#Kolding_Cup_2025_modal"></img>
        <div class="card-body">
          <h5 class="card-title">Internationales Handballturnier Kolding 2025</h5>
          <p class="card-text">Wir wollen den Mädchen der D-Jugend des THC die Teilnahme an einem der größten Handballturniere ermöglichen und uns im internationalen Vergleich mit Topteams messen.</p>
          <a href="https://www.betterplace.org/de/projects/141469-mit-der-handballjugend-zum-kolding-cup-2025" class="btn btn-primary" target="_blank">Unterstützen</a>
        </div>
      </div>
    </div>
  </>
);

const NewsContent3 = () => (
  <>
    <div class="col-md-3 mb-1">
    <div class="timeline-date px-4">2024 | Erfurt</div>
    <div class="card">
      <img src="_assets/neue-leibchen-2024.jpg" class="card-img-top" alt="News 1" data-bs-toggle="modal" data-bs-target="#neue-leibchen-2024_modal"></img>
      <div class="card-body">
        <h5 class="card-title">Neue Leibchen für den Nachwuchs</h5>
        <p class="card-text">Die Leibchen sind bereits im Einsatz, da die Mädels auch in den Ferien fleißig trainiert haben.</p>
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
    <BackgroundWrapper>
      <Wrapper>
        <NewsHeader></NewsHeader>
        <NewsWrapper>
          <NewsContent1></NewsContent1>
          <NewsContent2></NewsContent2>
          <NewsContent3></NewsContent3>
        </NewsWrapper>
        <AllProjectsButton></AllProjectsButton>
      </Wrapper>
    </BackgroundWrapper>
    <WaveBottom></WaveBottom>
  </>
);

export default News;