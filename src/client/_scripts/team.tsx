import WaveTop from "./wave_top.tsx";
import WaveBottom from './wave_bottom.tsx';

interface ContentProps {
  imgSrc: string;
	imgSrcAlt: string;
  title: string;
}

const Content = ( props: ContentProps ) => (
  <>
    <div class="col-md-4 mb-4">
      <div class="card ">
          <img src={props.imgSrc} class="card-img-top" alt={props.imgSrcAlt} loading="lazy"></img>
          <div class="card-body text-center">
              <h5 class="card-title">{props.title}</h5>
          </div>
      </div>
    </div>
  </>
);

const Team = () => (
  <>
    <WaveTop />
    <div class='secondary-background'>
      <section class="container" id="team">
        <h2 class="text-center mb-4">Vorstand</h2>
        <div class="row justify-content-center">
          <Content 
            imgSrc="./_assets/images/Ruben_Arnold-no_logo.webp"
            imgSrcAlt="Ruben Arnold"
            title="Ruben Arnold"
          />
          <Content 
            imgSrc="./_assets/images/Steffen_Ahrens-no_logo.webp"
            imgSrcAlt="Steffen Ahrens"
            title="Steffen Ahrens"
          />
        </div>
      </section>
    </div>
    <WaveBottom />
  </>
);

export default Team;