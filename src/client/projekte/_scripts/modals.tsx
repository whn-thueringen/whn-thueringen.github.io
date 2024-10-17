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
      id='Kolding_Cup_2025_modal'
      title="Internationales Handballturnier Kolding 2025"
      imgSrc="../_assets/Kolding_Cup_2025.jpeg"
      imgSrcAlt="Kolding Cup 2025"
    />
    <Modal
      id='neue-leibchen-2024_modal'
      title="Neue Leibchen für den Nachwuchs"
      imgSrc="./_assets/neue-leibchen-2024.jpg"
      imgSrcAlt="Bild: Neue Leibchen für den Nachwuchs"
    />
    <Modal
      id='Kassieraktion_alle_modal'
      title="Erfolgreiche dm-markt Kassieraktion"
      imgSrc="../_assets/Handballcamp_2024.jpeg"
      imgSrcAlt="Bild: Erfolgreiche dm-markt Kassieraktion Alle vor DM Laden"
    />
    <Modal
      id='Kassieraktion_check_modal'
      title="Erfolgreiche dm-markt Kassieraktion"
      imgSrc="./_assets/drogerie_markt_spende_check_2024.jpg"
      imgSrcAlt="Bild: Erfolgreiche dm-markt Kassieraktion Spendencheck"
    />
    <Modal
      id='Kassieraktion_pdf_modal'
      title="Erfolgreiche dm-markt Kassieraktion"
      imgSrc="./_assets/DM-Kassieraktion_Flyer.pdf"
      imgSrcAlt="Bild: Erfolgreiche dm-markt Kassieraktion PDF Flyer"
    />
  </>
);  

export default Modals;