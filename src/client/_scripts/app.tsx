import { render } from "solid-js/web";
import type { JSX } from "solid-js";
import Impressum from "./impressum.tsx";
import Header from "./header.tsx";
import Navbar from "./navbar.tsx";
import Leitthemen from "./leitthemen.tsx";
import SponsorSlider from "./sponsor_slider.tsx";
import News from "./news.tsx";
import Team from "./team.tsx"; 
import Bankverbindung from './bankverbindung.tsx';
import Modals from "./modals.tsx"

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <Leitthemen />
      <News />
      <SponsorSlider />
      <Team />
      <Bankverbindung />
      <Impressum />
      <Modals />
    </>
  );
}

// deno-lint-ignore no-undef
const root = document.getElementById("app");

if (root) {
  render(() => <App />, root);
} else {
  console.error("Root element not found");
}