<script lang="ts">
  const sections = [
    {
      title: "1. Allgemeine Hinweise",
      content: `
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. In dieser Datenschutzerklärung erfahren Sie,
        welche personenbezogenen Daten wir erheben, zu welchem Zweck sie verwendet werden und wie wir sie schützen.
      `
    },
    {
      title: "2. Verantwortliche Stelle",
      content: `
        <strong>Förderverein für weiblichen Handball e.V.</strong><br>
        Vor der Lohweide 29, 99092 Erfurt<br>
        E-Mail: info@whn-thueringen.de<br>
        Telefon: +49 176 44415740
      `
    },
    {
      title: "3. Erhebung und Speicherung personenbezogener Daten",
      content: `
        Wir erheben und speichern personenbezogene Daten nur, wenn Sie uns diese freiwillig zur Verfügung stellen, z.B. durch E-Mail oder Telefon.
        <ul>
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Nachrichtentext</li>
        </ul>
        Diese Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
      `
    },
    {
      title: "4. Zwecke der Datenverarbeitung",
      content: `
        Die von Ihnen übermittelten Daten werden für folgende Zwecke genutzt:
        <ul>
          <li>Beantwortung von Anfragen</li>
          <li>Abwicklung von Mitgliedsanträgen</li>
          <li>Kommunikation im Rahmen von Projekten oder Vereinsaktivitäten</li>
        </ul>
      `
    },
    {
      title: "5. Rechtsgrundlagen",
      content: `
        Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a (Einwilligung) und/oder Art. 6 Abs. 1 lit. b (Erfüllung eines Vertrages) der DSGVO.
      `
    },
    {
      title: "6. Datensicherheit",
      content: `
        Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre Daten vor Manipulation, Verlust, unbefugtem Zugriff oder Offenlegung zu schützen.
      `
    },
    {
      title: "7. Weitergabe von Daten",
      content: `
        Ihre personenbezogenen Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben,
        es sei denn, dies ist zur Vertragserfüllung erforderlich oder wir sind gesetzlich dazu verpflichtet.
      `
    },
    {
      title: "8. Ihre Rechte",
      content: `
        Sie haben das Recht:
        <ul>
          <li>Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten zu fordern, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen (Art. 17 DSGVO)</li>
          <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen (Art. 21 DSGVO)</li>
        </ul>
      `
    },
    {
      title: "9. Speicherdauer",
      content: `
        Ihre Daten werden so lange gespeichert, wie dies für die Bearbeitung Ihrer Anfrage notwendig ist.
        Sobald der Zweck der Speicherung entfällt, werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
      `
    },
    {
      title: "10. Änderungen der Datenschutzerklärung",
      content: `
        Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, um rechtlichen Anforderungen zu entsprechen oder Änderungen unserer Dienste umzusetzen.
      `
    }
  ];
</script>

<section class="privacy-policy container my-5">
  <h2 class="text-center mb-4">Datenschutzerklärung</h2>
  {#each sections as section}
    <div class="privacy-section">
      <h3>{@html section.title}</h3>
      <p>{@html section.content}</p>
    </div>
  {/each}
</section>
