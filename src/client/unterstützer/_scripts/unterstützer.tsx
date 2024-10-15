import type { ParentProps } from 'solid-js';

const Wrapper = (props: ParentProps) => (
  <section class="container my-5" id="supporters">{props.children}</section>
);

const UnterstützerTitle = () => (
  <h2 class="text-center mb-4">Unsere Unterstützer</h2>
);

const ContentWrapper = (props: ParentProps) => (
  <div class="row justify-content-center">{props.children}</div>
);

const CardContent1 = () => (
  <div class="col-md-4 mb-4">
    <div class="card text-center">
      <img src="../_assets/logo_avenida_therme.png" class="card-img-top p-2" alt="Unterstützer 1"></img>
      <div class="card-body">
        <h5 class="card-title"><a href="https://www.avenida-therme.de" target="_blank">Avenida Therme Hohenfelden</a></h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
);


const CardContent2 = () => (
  <div class="col-md-4 mb-4">
    <div class="card text-center">
      <img src="../_assets/Logo_Heinze-Kollegen_Website.png" class="card-img-top p-2 pt-4" alt="Unterstützer 2"></img>
      <div class="card-body">
        <h5 class="card-title"><a href="https://hk-finanzberatung.de/" target="_blank">Heinze & Kollegen Finanzberatung</a></h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
);

const Unterstützer = () => (
  <>
    <Wrapper>
      <UnterstützerTitle></UnterstützerTitle>
      <ContentWrapper>
        <CardContent1></CardContent1>
        <CardContent2></CardContent2>
      </ContentWrapper>
    </Wrapper>
  </>
);

export default Unterstützer;