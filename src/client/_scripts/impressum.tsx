import type { ParentProps } from 'solid-js';
import WaveTop from "./wave_top.tsx";

const Footer = (props: ParentProps) => (
  <footer class="text-center p-4" id="Impressum">{props.children}</footer>
);

const Div = (props: ParentProps) => (
  <div class="container justify-content-center d-flex align-items-center flex-column">{props.children}</div>
);

const ImpressumContent = () => (
  <>
    <h4>Impressum</h4>
    <p><strong>Förderverein des weiblichen Handballnachwuchses in Thüringen e.V.</strong></p>
    <h5>Adresse</h5>
    <p class="m-0">c/o Steffen Ahrens</p>
    <p class="eingerückt m-0">Vor der Lohweide 29</p>
    <p class="eingerückt m-0">99092 Erfurt</p>
    <p class="eingerückt">Deutschland</p>
    <p>Ansprechpartner: Steffi Günther</p>
    <p>Telefon: +49 176 44415740</p>
    <p>Email: info@whn-thueringen.de</p>
    <p>Vertreten durch: Ruben Arnold & Steffen Ahrens</p>
    <p>StNr.: 151/141/20933</p>
    <div class="line"></div>
    <a href="./datenschutz/">Datenschutzerklärung</a>
  </>
);


const Impressum = () => (
  <>
    <WaveTop></WaveTop>
    <Footer>
      <Div>
        <ImpressumContent></ImpressumContent>
      </Div>
    </Footer>
  </>
);

export default Impressum;