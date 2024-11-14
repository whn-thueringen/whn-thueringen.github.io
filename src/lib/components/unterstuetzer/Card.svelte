<script>
  export let title;
  export let imgSrc;
  export let imgSrcAlt;
  export let link;
  export let ImgClass;
</script>

<div class="col-md-4 mb-4">
  <div class="card-content text-center">
    <img src={imgSrc} class={ImgClass} alt={imgSrcAlt}/>
    <div class="card-body">
      <h5 class="card-title"><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h5>
    </div>
  </div>
</div>