import { render } from "solid-js/web";
import type { JSX } from "solid-js";
import Impressum from "./impressum.tsx";
import Header from "./header.tsx";
import Navbar from "./navbar.tsx";
import Leitthemen from "./leitthemen.tsx";
import SponsorSlider from "./sponsor_slider.tsx";
import News from "./news.tsx";
import Team from "./team.tsx"; 

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <Leitthemen />
      <SponsorSlider />
      <News />
      <Team />
      <Impressum />
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