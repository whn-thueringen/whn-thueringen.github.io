import type { ParentProps } from 'solid-js';

const Wrapper = (props: ParentProps) => (
  <section class="container my-5">{props.children}</section>
);

const Header = () => (
  <h2 class="text-center mb-4">Darin sind wir stark</h2> 
);

const CarouselWrapper = (props: ParentProps) => (
  <div id="leitthemenCarousel" class="carousel slide" data-bs-ride="carousel">{props.children}</div>
);

const CarouselItems = () => (
  <>
    <div class="carousel-item active">
      <div class="card">
          <div class="card-body text-center">
              <h5 class="card-title">Gleichberechtigung</h5>
              <p class="card-text">Wir fördern aktiv Mädchen im Handballsport und schaffen Chancengleichheit.</p>
          </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="card ">
          <div class="card-body text-center">
              <h5 class="card-title">Teamgeist</h5>
              <p class="card-text">Wir fördern den Zusammenhalt und die Zusammenarbeit im Team.</p>
          </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="card ">
          <div class="card-body text-center">
              <h5 class="card-title">Fairness</h5>
              <p class="card-text">Wir legen großen Wert auf Fairplay und Respekt gegenüber allen Beteiligten.</p>
          </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="card ">
          <div class="card-body text-center">
              <h5 class="card-title">Engagement</h5>
              <p class="card-text">Wir unterstützen die kontinuierliche Entwicklung der Spielerinnen.</p>
          </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="card ">
          <div class="card-body text-center">
              <h5 class="card-title">Nachhaltigkeit</h5>
              <p class="card-text">Wir achten darauf, dass unsere Angebote langfristig wirken.</p>
          </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="card ">
          <div class="card-body text-center">
              <h5 class="card-title">Integration</h5>
              <p class="card-text">Wir fördern die Teilhabe von Menschen unterschiedlicher Hintergründe.</p>
          </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="card ">
          <div class="card-body text-center">
              <h5 class="card-title">Förderung</h5>
              <p class="card-text">Vielfältige Möglichkeiten zur individuellen Förderung jeder Spielerin.</p>
          </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="card ">
          <div class="card-body text-center">
              <h5 class="card-title">Entwicklung junger Talente</h5>
              <p class="card-text">Talentierte Spielerinnen sollen bestmöglich entwickelt werden.</p>
          </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="card ">
          <div class="card-body text-center">
              <h5 class="card-title">Breitensport stärken</h5>
              <p class="card-text">Zugang zum Handballsport für viele Mädchen und lebenslanges Engagement im Sport.</p>
          </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="card ">
          <div class="card-body text-center">
              <h5 class="card-title">Persönlichkeitsentwicklung</h5>
              <p class="card-text">Entwicklung von sozialen Kompetenzen wie Selbstbewusstsein und Teamfähigkeit.</p>
          </div>
      </div>
    </div>
  </>
);

const CarouselButtons = () => (
  <>
    <button class="carousel-control-prev hidden" type="button" data-bs-target="#leitthemenCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next hidden" type="button" data-bs-target="#leitthemenCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </>
);

const Leitthemen = () => (
  <>
    <Wrapper>
      <Header></Header>
      <CarouselWrapper>
        <CarouselItems></CarouselItems>
        <CarouselButtons></CarouselButtons>
      </CarouselWrapper>
    </Wrapper>
  </>
);

export default Leitthemen;