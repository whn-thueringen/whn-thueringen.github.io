import type { ParentProps } from 'solid-js';

const Wrapper = (props: ParentProps) => (
  <div>{props.children}</div>
);

const ProjectTitle = () => (
  <h1 class="text-center">Projekte</h1>
);

const TimelineWrapper = (props: ParentProps) => (
  <div class="timeline">{props.children}</div>
);

const CardWrapper1 = (props: ParentProps) => (
  <div class="row justify-content-center">{props.children}</div>
);

const CardWrapper2 = (props: ParentProps) => (
  <div class="col-md-10 mb-4">{props.children}</div>
);

const CardHeader1 = () => (
  <div class="timeline-date px-4 text-center">19.04. - 20.04.2025 | Erfurt</div>
);

const CardContent1 = () => (
  <div class="card d-flex flex-column flex-md-row">
    <div class="col-md-6">
      <img src="../_assets/Kolding_Cup_2025.jpeg" alt="Handballturnier Kolding 2025" class="card-img-top"></img>
    </div>
    <div class="col-md-6 d-flex flex-column justify-content-center">
      <div class="card-body">
        <h5 class="card-title">Internationales Handballturnier Kolding 2025</h5>
        <p class="card-text">Wir wollen den Mädchen der D-Jugend des THC die Teilnahme an einem der größten Handballturniere ermöglichen und uns im internationalen Vergleich mit Topteams messen.</p>
        <a href="https://www.betterplace.org/de/projects/141469-mit-der-handballjugend-zum-kolding-cup-2025" class="btn btn-primary" target="_blank">Unterstützen</a>
      </div>
    </div>
  </div>
);

const CardHeader2 = () => (
  <div class="timeline-date px-4 text-center">11.10.2024 | Erfurt</div>
);

const CardContent2 = () => (
  <div class="card d-flex flex-column flex-md-row">
    <div class="col-md-6">
      <img src="../_assets/kassieraktion_bild_alle_2024.jpg" alt="Kassieraktion" class="card-img-top"></img>
    </div>
    <div class="col-md-6 d-flex flex-column justify-content-center">
      <div class="card-body">
        <h5 class="card-title">Erfolgreiche dm-markt Kassieraktion</h5>
        <p>Ein großes Dankeschön geht an den dm-Markt im Thüringen Park Erfurt. In einer bisher einmaligen Aktion und mit Unterstützung der Bundesliga Profis Julie Holm & Josefine Hanfland sowie 12 Nachwuchshandballerinnen wurde in einer 2-stündigen Aktion eine unfassbare Summe von 5.700 EUR erwirtschaftet. Die Summe wird zu 100% an den Förderverein gespendet. DANKE an alle Beteiligten, die diese Aktion so erfolgreich gemacht haben.</p>
      </div>
    </div>
  </div>
);

const CardHeader3 = () => (
  <div class="timeline-date px-4 text-center">30.09. - 02.10.2024 | Erfurt</div>
);

const CardContent3 = () => (
  <div class="card d-flex flex-column flex-md-row">
    <div class="col-md-6">
      <img src="../_assets/Handballcamp_2024.jpeg" alt="1. Handballcamp" class="card-img-top"></img>
    </div>
    <div class="col-md-6 d-flex flex-column justify-content-center">
      <div class="card-body">
        <h5 class="card-title">1. Handballcamp des Fördervereins</h5>
        <p class="card-text">In der ersten Hälfte der Oktoberferien fand unser erstes  3-tägiges Handballcamp im Sportgymnasium Erfurt statt. Unter der Leitung von Ruben Arnold, Franziska Lücke und Steffen Ahrens hatten 13 Kinder (8-11 Jahre) zahlreiche Trainingseinheiten. Es wurde nicht nur der Spaß am Handball vermittelt, sondern auch an verschieden Skills gearbeitet. Zu Gast war u.a. Nationalspielerin Kim Ott, welche den Kindern beim Training über die Schultern blickte. Danke an alle Unterstützer, die das Camp mit gefördert haben. Das nächste Camp folgt sicher.
        </p>
      </div>
    </div>
  </div>
);

const Projekte = () => (
  <>
    <Wrapper>
      <ProjectTitle></ProjectTitle>
      <TimelineWrapper>
        <CardWrapper1>
          <CardWrapper2>
            <CardHeader1></CardHeader1>
            <CardContent1></CardContent1>
          </CardWrapper2>
        </CardWrapper1>
        <CardWrapper1>
          <CardWrapper2>
            <CardHeader2></CardHeader2>
            <CardContent2></CardContent2>
          </CardWrapper2>
        </CardWrapper1>
        <CardWrapper1>
          <CardWrapper2>
            <CardHeader3></CardHeader3>
            <CardContent3></CardContent3>
          </CardWrapper2>
        </CardWrapper1>
      </TimelineWrapper>
    </Wrapper>
  </>
);

export default Projekte;