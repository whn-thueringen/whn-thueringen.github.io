import type { ParentProps } from 'solid-js';

const Wrapper = (props: ParentProps) => (
  <section class="container my-5" id="team">{props.children}</section>
);

const TeamHeader = () => (
  <h2 class="text-center mb-4">Vorstand</h2>
);

const ContentWrapper = (props: ParentProps) => (
  <div class="row justify-content-center">{props.children}</div>
);

const Content1 = () => (
  <>
    <div class="col-md-4 mb-4">
      <div class="card ">
          <img src="./_assets/Ruben_Arnold-no_logo.png" class="card-img-top" alt="Teammitglied 1"></img>
          <div class="card-body text-center">
              <h5 class="card-title">Ruben Arnold</h5>
          </div>
      </div>
    </div>
  </>
);

const Content2 = () => (
  <>
    <div class="col-md-4 mb-4">
        <div class="card ">
            <img src="./_assets/Steffen_Ahrens-no_logo.png" class="card-img-top" alt="Teammitglied 2"></img>
            <div class="card-body text-center">
                <h5 class="card-title">Steffen Ahrens</h5>
            </div>
        </div>
    </div>
  </>
);

const Team = () => (
  <>
    <Wrapper>
      <TeamHeader />
      <ContentWrapper>
        <Content1 />
        <Content2 />
      </ContentWrapper>
    </Wrapper>
  </>
);

export default Team;