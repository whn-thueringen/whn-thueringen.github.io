import type { ParentProps } from 'solid-js';

const Wrapper = (props: ParentProps) => (
  <section class="privacy-policy container my-5">{props.children}</section>
);

const DatenschutzHeader = () => (
  <>
    <h2 class="text-center mb-4">Datenschutzerklärung</h2>
  </>
);

const DatenschutzContent1 = () => (
  <div class="privacy-section">
    <h3>1. Allgemeine Hinweise</h3>
    <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. In dieser Datenschutzerklärung erfahren Sie, welche personenbezogenen Daten wir erheben, zu welchem Zweck sie verwendet werden und wie wir sie schützen.</p>
</div>
);

const DatenschutzContent2 = () => (
  <div class="privacy-section">
    <h3>2. Verantwortliche Stelle</h3>
    <p><strong>Förderverein für weiblichen Handball e.V.</strong></p>
    <p>Vor der Lohweide 29, 99092 Erfurt</p>
    <p>E-Mail: info@whn-thueringen.de</p>
    <p>Telefon: +49 176 44415740</p>
  </div>
);

const DatenschutzContent3 = () => (
  <div class="privacy-section">
    <h3>3. Erhebung und Speicherung personenbezogener Daten</h3>
    <p>Wir erheben und speichern personenbezogene Daten nur, wenn Sie uns diese freiwillig zur Verfügung stellen, z.B. durch E-Mail oder Telefon.</p>
    <ul>
      <li>Name</li>
      <li>E-Mail-Adresse</li>
      <li>Nachrichtentext</li>
    </ul>
    <p>Diese Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.</p>
  </div>
);

const DatenschutzContent4 = () => (
  <div class="privacy-section">
    <h3>4. Zwecke der Datenverarbeitung</h3>
    <p>Die von Ihnen übermittelten Daten werden für folgende Zwecke genutzt:</p>
    <ul>
      <li>Beantwortung von Anfragen</li>
      <li>Abwicklung von Mitgliedsanträgen</li>
      <li>Kommunikation im Rahmen von Projekten oder Vereinsaktivitäten</li>
    </ul>
  </div>
);

const DatenschutzContent5 = () => (
  <div class="privacy-section">
    <h3>5. Rechtsgrundlagen</h3>
    <p>Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a (Einwilligung) und/oder Art. 6 Abs. 1 lit. b (Erfüllung eines Vertrages) der DSGVO.</p>
  </div>
);

const DatenschutzContent6 = () => (
  <div class="privacy-section">
    <h3>6. Datensicherheit</h3>
    <p>Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre Daten vor Manipulation, Verlust, unbefugtem Zugriff oder Offenlegung zu schützen.</p>
  </div>
);

const DatenschutzContent7 = () => (
  <div class="privacy-section">
    <h3>7. Weitergabe von Daten</h3>
    <p>Ihre personenbezogenen Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben, es sei denn, dies ist zur Vertragserfüllung erforderlich oder wir sind gesetzlich dazu verpflichtet.</p>
  </div>
);

const DatenschutzContent8 = () => (
  <div class="privacy-section">
    <h3>8. Ihre Rechte</h3>
    <p>Sie haben das Recht:</p>
    <ul>
      <li>Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
      <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
      <li>Löschung Ihrer Daten zu fordern, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen (Art. 17 DSGVO)</li>
      <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
      <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen (Art. 21 DSGVO)</li>
    </ul>
  </div>
);

const DatenschutzContent9 = () => (
  <div class="privacy-section">
    <h3>9. Speicherdauer</h3>
    <p>Ihre Daten werden so lange gespeichert, wie dies für die Bearbeitung Ihrer Anfrage notwendig ist. Sobald der Zweck der Speicherung entfällt, werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
  </div>
);

const DatenschutzContent10 = () => (
  <div class="privacy-section">
    <h3>10. Änderungen der Datenschutzerklärung</h3>
    <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, um rechtlichen Anforderungen zu entsprechen oder Änderungen unserer Dienste umzusetzen.</p>
  </div>
);


const Datenschutz = () => (
  <>
    <Wrapper>
      <DatenschutzHeader />
      <DatenschutzContent1 />
      <DatenschutzContent2 />
      <DatenschutzContent3 />
      <DatenschutzContent4 />
      <DatenschutzContent5 />
      <DatenschutzContent6 />
      <DatenschutzContent7 />
      <DatenschutzContent8 />
      <DatenschutzContent9 />
      <DatenschutzContent10 />
    </Wrapper>
  </>
);

export default Datenschutz;