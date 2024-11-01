<script lang="ts">
  import { onMount } from 'svelte';

  import FWHNLogo from '$lib/assets/FWHN_Logo_final_für_Hintergrund_hell.svg';

  let isCollapsed = true;

  const toggleCollapse = () => {
    isCollapsed = !isCollapsed;
  };

  onMount(() => {
    const toggleButton = document.querySelector('.navbar-toggler');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleCollapse);
      
      return () => {
        toggleButton.removeEventListener('click', toggleCollapse);
      };
    }
  });
</script>

<nav class="navbar navbar-expand-lg p-2">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src={FWHNLogo} alt="WHN Thüringen Logo" class="svg-small" style="max-width: 150px;" />
    </a>
    <h4 class="mt-2 me-3">FwHn Thüringen</h4>
    <button 
      class="navbar-toggler text-dark" 
      type="button" 
      aria-controls="navbarNav" 
      aria-expanded="{!isCollapsed}" 
      aria-label="Toggle navigation"
      on:click={toggleCollapse}
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${isCollapsed ? 'hide' : 'show'}`} id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href="/#News">News & Aktuelles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href="/projekte/">Projekte</a>
        </li>
        <li class="nav-item">
          <a class="nav-link rounded pe-2 ps-2 mt-2 me-2" href="/unterstützer">Unterstützer</a>
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
    </div>
  </div>
</nav>
