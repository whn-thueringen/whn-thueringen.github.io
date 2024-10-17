
interface CardProps {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const Card = ( props: CardProps ) => (
  <>
    <h3 class="card-title" id="statutes">{props.title}</h3>
    <p class="card-text">{props.description}</p>
    <a href={props.link} class="btn btn-primary" download>{props.linkTitle}</a>
  </>
);

const Dokumente = () => (
  <section id="documents" class="container my-5">
    <h2 class="text-center mb-4">Dokumente</h2>
    <div class="card">  
      <div class="card-body">
        <Card
        title='Satzung'
        description='Hier findest du die Satzung als PDF zum Download.'
        link='..\_assets\downloads\Satzung FwHT - Förderverein des weiblichen Handballnachwuchses Thüringen e.V. 14-07-24.pdf'
        linkTitle='Download Satzung'
        />
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <Card
        title='Eintragung'
        description='Hier kannst du die Eintragung finden.'
        link='..\_assets\downloads\Eintragung Förderverein Wahn Thüringen e. V. .pdf'
        linkTitle='Download Eintragung'
        />
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <Card
        title='Gemeinnützigkeit'
        description='Hier kannst du die Gemeinnützigkeit finden.'
        link='..\_assets\downloads\Gemeinnuetzige_Einrichungen_Anmeldeformular_2023.05.01.pdf'
        linkTitle='Download Gemeinnützigkeit'
        />
      </div>
    </div>
  </section>
);

export default Dokumente;