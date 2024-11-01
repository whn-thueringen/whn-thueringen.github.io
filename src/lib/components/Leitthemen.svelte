<script lang=ts>
  interface CardProps {
    title: string;
    description: string;
  }

  const carouselItems: CardProps[] = [
    { title: 'Gleichberechtigung', description: 'Wir fördern aktiv Mädchen im Handballsport und schaffen Chancengleichheit.' },
    { title: 'Teamgeist', description: 'Wir fördern den Zusammenhalt und die Zusammenarbeit im Team.' },
    { title: 'Fairness', description: 'Wir legen großen Wert auf Fairplay und Respekt gegenüber allen Beteiligten.' },
    { title: 'Engagement', description: 'Wir unterstützen die kontinuierliche Entwicklung der Spielerinnen.' },
    { title: 'Nachhaltigkeit', description: 'Wir achten darauf, dass unsere Angebote langfristig wirken.' },
    { title: 'Integration', description: 'Wir fördern die Teilhabe von Menschen unterschiedlicher Hintergründe.' },
    { title: 'Förderung', description: 'Vielfältige Möglichkeiten zur individuellen Förderung jeder Spielerin.' },
    { title: 'Entwicklung junger Talente', description: 'Talentierte Spielerinnen sollen bestmöglich entwickelt werden.' },
    { title: 'Breitensport stärken', description: 'Zugang zum Handballsport für viele Mädchen und lebenslanges Engagement im Sport.' },
    { title: 'Persönlichkeitsentwicklung', description: 'Entwicklung von sozialen Kompetenzen wie Selbstbewusstsein und Teamfähigkeit.' },
  ];
</script>

<section class="container my-5">
  <h2 class="text-center mb-4">Darin sind wir stark</h2> 
  <div id="leitthemenCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      {#each carouselItems as { title, description }, index}
        <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="carousel-control-prev" type="button" data-bs-target="#leitthemenCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" aria-label="Previous"></span>
    </button>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="carousel-control-next" type="button" data-bs-target="#leitthemenCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true" aria-label="Next"></span>
    </button> 
  </div>
</section>
