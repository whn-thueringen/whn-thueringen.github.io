import type { ParentProps } from 'solid-js';

const NavbarWrapper = (props: ParentProps) => (
  <nav class="navbar navbar-expand-lg p-2">{props.children}</nav>
);

const NavbarContainer = (props: ParentProps) => (
  <div class="container-fluid">{props.children}</div>
);

const NavbarImage = () => (
  <a class="navbar-brand" href="/whn-thueringen.github.io/">
    <img src="https://raw.githubusercontent.com/whn-thueringen/whn-thueringen.github.io/refs/heads/main/src/client/_assets/FWHN_Logo_final_fu%CC%88r_Hintergrund_hell.svg" alt="WHN Thüringen Logo" class="img-fluid svg-small" style="max-width: 150px;"></img>
  </a>
);

const NavbarHeading = () => (
  <h4 class="mt-2 me-3">FWHN Thüringen</h4>
);

const NavbarButton = () => (
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
);

const NavbarLinksWrapper = (props: ParentProps) => (
  <div class="collapse navbar-collapse" id="navbarNav">{props.children}</div>
);

const NavbarLinks = () => (
  <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href="/#News">News & Aktuelles</a>
    </li>
    <li class="nav-item">
        <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href="/projekte/">Projekte</a>
    </li>
    <li class="nav-item">
      <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href="/unterstützer/">Unterstützer</a>
    </li>
    <li class="nav-item">
      <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href="/dokumente/">Dokumente</a>
    </li>
    <li class="nav-item">
        <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href="/#team">Vorstand</a>
    </li>
    <li class="nav-item">
      <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href="/#Impressum">Impressum</a>
    </li>
  </ul>
);



const Navbar = () => (
  <>
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarImage />
        <NavbarHeading />
        <NavbarButton />
        <NavbarLinksWrapper>
          <NavbarLinks />
        </NavbarLinksWrapper>
      </NavbarContainer>
    </NavbarWrapper>
  </>
);

export default Navbar;