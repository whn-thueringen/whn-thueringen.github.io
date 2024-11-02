<script>
  export let title;
  export let description;
  export let link;
  export let linkTitle;
</script>

<h3 class="card-title" id="statutes">{title}</h3>
<p class="card-text">{description}</p>
<a href={link} class="btn-own" download>{linkTitle}</a>