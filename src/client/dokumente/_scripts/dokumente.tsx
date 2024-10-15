import type { ParentProps } from 'solid-js';

const Wrapper = (props: ParentProps) => (
  <section id="documents" class="container my-5">{props.children}</section>
);

const DocumentTitle = () => (
  <h2 class="text-center mb-4">Dokumente</h2>
);

const CardWrapper = (props: ParentProps) => (
  <div class="card">{props.children}</div>
);

const CardBody = (props: ParentProps) => (
  <div class="card-body">{props.children}</div>
);

const CardContent1 = () => (
  <>
    <h3 class="card-title" id="statutes">Satzung</h3>
    <p class="card-text">Hier findest du die Satzung als PDF zum Download.</p>
    <a href="..\_assets\downloads\Satzung FwHT - Förderverein des weiblichen Handballnachwuchses Thüringen e.V. 14-07-24.pdf" class="btn btn-primary">Download Satzung</a>
  </>
);

const CardContent2 = () => (
  <>
    <h3 class="card-title" id="foundingProtocol">Gründungsprotokoll</h3>
    <p class="card-text">Hier findest du das Gründungsprotokoll als PDF zum Download.</p>
    <a href="..\_assets\downloads\Förderverein wHT Gründungsprotoll.pdf" class="btn btn-primary">Download Gründungsprotokoll</a>
  </>
);

const CardContent3 = () => (
  <>
    <h3 class="card-title" id="applications">Eintragung</h3>
    <p class="card-text">Hier kannst du die Eintragung finden.</p>
    <a href="..\_assets\downloads\Eintragung Förderverein Wahn Thüringen e. V. .pdf" class="btn btn-primary">Download Eintragung</a>
  </>
);

const CardContent4 = () => (
  <>
    <h3 class="card-title" id="applications">Gemeinnützigkeit</h3>
    <p class="card-text">Hier kannst du die Gemeinnützigkeit finden.</p>
    <a href="..\_assets\downloads\Gemeinnuetzige_Einrichungen_Anmeldeformular_2023.05.01.pdf" class="btn btn-primary">Download Gemeinnützigkeit</a>
  </>
);


const Dokumente = () => (
  <>
    <Wrapper>
      <DocumentTitle></DocumentTitle>
      <CardWrapper>
        <CardBody>
          <CardContent1></CardContent1>
        </CardBody>
      </CardWrapper>
      <CardWrapper>  
        <CardBody>
          <CardContent2></CardContent2>
        </CardBody>
      </CardWrapper>
      <CardWrapper>    
        <CardBody>
          <CardContent3></CardContent3>
        </CardBody>
      </CardWrapper>
      <CardWrapper>
        <CardBody>
          <CardContent4></CardContent4>
        </CardBody>
      </CardWrapper>
    </Wrapper>
  </>
);

export default Dokumente;