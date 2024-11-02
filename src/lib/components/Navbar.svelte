<script>
  import FWHNLogo from '$lib/assets/favicon.svg';

  import { base } from '$app/paths';
</script>

<nav class="navbar navbar-expand-lg p-2">
  <div class="container-fluid">
    <a class="navbar-brand" href="{base}">
      <enhanced:img src={FWHNLogo} alt="WHN Thüringen Logo" class="svg-small" style="max-width: 150px;" aria-label="home"/>
    </a>
    <h4 class="mt-2 me-3">FwHn Thüringen</h4>
    <button 
      class="navbar-toggler justify-content-center" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon text-dark"><i class='bx bx-menu'></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link rounded pe-2 ps-2 mt-2 me-2 text-dark" href="{base}/#News">News & Aktuelles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link rounded pe-2 ps-2 mt-2 me-2 text-dark" href="{base}/projekte/">Projekte</a>
        </li>
        <li class="nav-item">
          <a class="nav-link rounded pe-2 ps-2 mt-2 me-2 text-dark" href="{base}/unterstützer">Unterstützer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link rounded pe-2 ps-2 mt-2 me-2 text-dark" href="{base}/dokumente/">Dokumente</a>
        </li>
        <li class="nav-item">
          <a class="nav-link rounded pe-2 ps-2 mt-2 me-2 text-dark" href="{base}/#team">Vorstand</a>
        </li>
        <li class="nav-item">
          <a class="nav-link rounded pe-2 ps-2 mt-2 me-2 text-dark" href="{base}/#Impressum">Impressum</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
