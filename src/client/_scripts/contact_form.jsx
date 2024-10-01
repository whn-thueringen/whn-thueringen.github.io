import { createSignal } from 'solid-js';

const ContactForm = () => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [message, setMessage] = createSignal('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/send', { // URL deines Servers
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name(),
        email: email(),
        message: message(),
      }),
    });

    if (response.ok) {
      alert('Nachricht erfolgreich gesendet!');
    } else {
      alert('Fehler beim Senden der Nachricht.');
    }
  };

  return (
    <div class="row">
      <h2 class="text-center mb-4 text-light">Kontakt</h2>
      <div class="col-md-6 mb-4">
        <h5>Kontaktformular</h5>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              required
              value={name()}
              onInput={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="email" class="form-label">E-Mail</label>
            <input
              type="email"
              class="form-control"
              id="email"
              required
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="message" class="form-label">Nachricht</label>
            <textarea
              class="form-control"
              id="message"
              rows="4"
              required
              value={message()}
              onInput={(e) => setMessage(e.currentTarget.value)}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Absenden</button>
        </form>
      </div>
      <div class="col-md-6 mb-4">
        <h5>Unsere Kontaktdaten</h5>
        <p><strong>E-Mail:</strong> info@whn-thueringen.de</p>
        <p><strong>Telefon:</strong> +49 123 456 789</p>
        <p><strong>Adresse:</strong> Musterstraße 1, 12345 Stadt</p>
      </div>
    </div>
  );
};

export default ContactForm;
