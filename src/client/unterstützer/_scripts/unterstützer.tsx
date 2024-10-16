interface CardProps {
  title: string;
  imgSrc: string;
  imgSrcAlt: string;
  link: string;
}

const Card = ( props: CardProps ) => (
  <div class="col-md-4 mb-4">
    <div class="card text-center">
      <img src={props.imgSrc} class="card-img-top p-2" alt={props.imgSrcAlt}></img>
      <div class="card-body">
        <h5 class="card-title"><a href={props.link} target="_blank">{props.title}</a></h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
);

const Unterstützer = () => (
  <section class="container my-5" id="supporters">  
    <h2 class="text-center mb-4">Unsere Unterstützer</h2>
    <div class="row justify-content-center">
      <Card
      title="Avenida Therme Hohenfelden"
      imgSrc="../_assets/logo_avenida_therme.png"
      imgSrcAlt="Avenida Therme Hohenfelden"
      link="https://www.avenida-therme.de"
      />
      <Card
      title="Heinze & Kollegen Finanzberatung"
      imgSrc="../_assets/Logo_Heinze-Kollegen_Website.png"
      imgSrcAlt="Heinze & Kollegen Finanzberatung"
      link="https://hk-finanzberatung.de/"
      />
    </div>
  </section>
);

export default Unterstützer;