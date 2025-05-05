<script>
  export let title;
  export let imgSrc;
  export let imgSrcAlt;
  export let link;
</script>

<div class="col">
  <div class="card h-100">
    <div class="d-flex align-items-center justify-content-center p-3" style="height: 180px;">
      <img src={imgSrc} class="img-fluid" style="max-height: 100%;" alt={imgSrcAlt}/>
    </div>
    <div class="card-body text-center">
      <h5 class="card-title">
        <a href={link} target="_blank" rel="noopener noreferrer" class="text-decoration-none">
          {title}
        </a>
      </h5>
    </div>
  </div>
</div>