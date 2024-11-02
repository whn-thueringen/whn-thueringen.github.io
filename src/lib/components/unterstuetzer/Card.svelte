<script>
  export let title;
  export let imgSrc;
  export let imgSrcAlt;
  export let link;
</script>

<div class="col-md-4 mb-4">
  <div class="card-content text-center">
    <enhanced:img src={imgSrc} class="card-img-top p-2" alt={imgSrcAlt} loading="lazy" />
    <div class="card-body">
      <h5 class="card-title"><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h5>
    </div>
  </div>
</div>