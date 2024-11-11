interface ImageProps {
  href: string;
  imgSrc: string;
  imgSrcAlt: string;
}

interface NavLinkProps {
  href: string;
  title: string;
}

const NavbarImage = ( props : ImageProps) => (
  <a class="navbar-brand" href={props.href}>
    <img src={props.imgSrc} alt={props.imgSrcAlt} class="img-fluid svg-small" style="max-width: 150px;"></img>
  </a>
);

const NavbarLink = ( props: NavLinkProps ) => (
  <li class="nav-item">
    <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href={props.href}>{props.title}</a>
  </li>
);

const Navbar = () => (
  <nav class="navbar navbar-expand-lg p-2">
    <div class="container-fluid">
      <NavbarImage
        href="whn-thueringen.de"
        imgSrc="https://raw.githubusercontent.com/whn-thueringen/whn-thueringen.github.io/refs/heads/main/src/client/_assets/FWHN_Logo_final_fu%CC%88r_Hintergrund_hell.svg"
        imgSrcAlt="WHN Thüringen Logo" 
      />
      <h4 class="mt-2 me-3">FwHn Thüringen</h4>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <NavbarLink 
            href="/#News"
            title="News & Aktuelles"
          />
          <NavbarLink 
            href="/projekte/"
            title="Projekte"
          />
          <NavbarLink 
            href="/unterstützer"
            title="Unterstützer"
          />
          <NavbarLink 
            href="/dokumente/"
            title="Dokumente"
          />
          <NavbarLink 
            href="/#team"
            title="Vorstand"
          />
          <NavbarLink 
            href="/#Impressum"
            title="Impressum"
          />
        </ul>  
      </div>
    </div>
  </nav>
);

export default Navbar;