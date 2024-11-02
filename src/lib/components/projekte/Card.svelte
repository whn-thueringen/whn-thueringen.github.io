<script>
  export let date;
  /**
   * @type {string | any[]}
   */
   export let images = [];
  export let title;
  export let description;
  export let link;
  export let linkClass;
  export let linkText;
  export let target;
  export let id;
</script>

<div class="timeline-date px-4 text-center">{date}</div>
<div class="card-content d-flex flex-column flex-md-row">
  <div class="col-md-6">
    <div id={target} class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {#each images as image, index}
          <div class="carousel-item {index === 0 ? 'active' : ''}">
            <img
              src={image.src}
              class="card-img-top-content"
              alt={image.alt}
              data-bs-toggle="modal"
              data-bs-target={image.modalId}
            />
          </div>
        {/each}
      </div>
      {#if images.length > 1}
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target={`#${target}`}
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target={`#${target}`}
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      {/if}
    </div>
  </div>
  <div class="col-md-6 d-flex flex-column justify-content-center">
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      {#if link}
        <a href={link} class={linkClass} target="_blank">{linkText}</a>
      {/if}
    </div>
  </div>
</div>
