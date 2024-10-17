interface ModalProps {
  title: string;

  imgSrc: string;

  imgSrcAlt: string;

  id: string;
}

const Modal = ( props: ModalProps ) => (
  <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="imageModalLabel">{props.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <img src={props.imgSrc} alt={props.imgSrcAlt} class="img-fluid big-img card-img-top"></img>
          </div>
        </div>
      </div>
  </div>
);

const Modals = () => (
  <>
    <Modal
      id='NewsModal1'
      title="Internationales Handballturnier Kolding 2025"
      imgSrc="../_assets/images/Kolding_Cup_2025.webp"
      imgSrcAlt="Kolding Cup 2025"
    />
    <Modal
      id='NewsModal2'
      title="Neue Leibchen für den Nachwuchs"
      imgSrc="./_assets/images/neue-leibchen-2024.webp"
      imgSrcAlt="Bild: Neue Leibchen für den Nachwuchs"
    />
    <Modal
      id='NewsModal3'
      title="Erfolgreiche dm-markt Kassieraktion"
      imgSrc="../_assets/images/kassieraktion_bild_alle_2024.webp"
      imgSrcAlt="Bild: Erfolgreiche dm-markt Kassieraktion Alle vor DM Laden"
    />
    <Modal
      id='NewsModal4'
      title="Erfolgreiche dm-markt Kassieraktion"
      imgSrc="./_assets/images/drogerie_markt_spende_check_2024.webp"
      imgSrcAlt="Bild: Erfolgreiche dm-markt Kassieraktion Spendencheck"
    />
    <Modal
      id='NewsModal5'
      title="Erfolgreiche dm-markt Kassieraktion"
      imgSrc="./_assets/images/DM-Kassieraktion_Flyer-1.webp"
      imgSrcAlt="Bild: Erfolgreiche dm-markt Kassieraktion PDF Flyer"
    />
    <Modal
      id='NewsModal6'
      title="Förderverein meets JUMPING FITNESS"
      imgSrc="./_assets/images/Förderverein_JUMPING_Fitness.webp"
      imgSrcAlt="Bild: Förderverein meets JUMPING FITNESS"
    />
    <Modal
      id='NewsModal7'
      title="Förderverein meets JUMPING FITNESS"
      imgSrc="./_assets/images/Pennewiss_Fitness_Instagram.webp"
      imgSrcAlt="Bild: Förderverein meets JUMPING FITNESS Instagram Pennewiss Fitness"
    />
  </>
);  

export default Modals;