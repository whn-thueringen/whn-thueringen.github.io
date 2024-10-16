interface CardProps {
  title: string;
  description: string;
}

const CarouselItemActive = ( props: CardProps ) => (
  <div class="carousel-item active">
    <div class="card">
        <div class="card-body text-center">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
        </div>
    </div>
  </div>
);

const CarouselItems = ( props: CardProps ) => (
  <div class="carousel-item">
    <div class="card">
        <div class="card-body text-center">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
        </div>
    </div>
  </div>
);

const Leitthemen = () => (
  <section class="container my-5">
    <h2 class="text-center mb-4">Darin sind wir stark</h2> 
    <div id="leitthemenCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <CarouselItemActive 
          title='Gleichberechtigung'
          description='Wir fördern aktiv Mädchen im Handballsport und schaffen Chancengleichheit.'        
        />
        <CarouselItems 
          title='Teamgeist'
          description='Wir fördern den Zusammenhalt und die Zusammenarbeit im Team.'        
        />
        <CarouselItems 
          title='Fairness'
          description='Wir legen großen Wert auf Fairplay und Respekt gegenüber allen Beteiligten.'        
        />
        <CarouselItems 
          title='Engagement'
          description='Wir unterstützen die kontinuierliche Entwicklung der Spielerinnen.'        
        />
        <CarouselItems 
          title='Nachhaltigkeit'
          description='Wir achten darauf, dass unsere Angebote langfristig wirken.'        
        />
        <CarouselItems 
          title='Integration'
          description='Wir fördern die Teilhabe von Menschen unterschiedlicher Hintergründe.'        
        />
        <CarouselItems 
          title='Förderung'
          description='Vielfältige Möglichkeiten zur individuellen Förderung jeder Spielerin.'        
        />
        <CarouselItems 
          title='Entwicklung junger Talente'
          description='Talentierte Spielerinnen sollen bestmöglich entwickelt werden.'        
        />
        <CarouselItems 
          title='Breitensport stärken'
          description='Zugang zum Handballsport für viele Mädchen und lebenslanges Engagement im Sport.'        
        />
        <CarouselItems 
          title='Persönlichkeitsentwicklung'
          description='Entwicklung von sozialen Kompetenzen wie Selbstbewusstsein und Teamfähigkeit..'        
        />
      </div> 
      <button class="carousel-control-prev hidden" type="button" data-bs-target="#leitthemenCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next hidden" type="button" data-bs-target="#leitthemenCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button> 
    </div>
  </section>
);

export default Leitthemen;