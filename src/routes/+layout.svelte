<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Header from '$lib/components/Header.svelte';

  import Impressum from '$lib/components/Impressum.svelte';
</script>
 
<Navbar />
<Header />
<slot />
<Impressum />

