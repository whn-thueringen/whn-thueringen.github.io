import { render } from "solid-js/web";
import type { JSX } from "solid-js";
import Impressum from "../../_scripts/impressum.tsx";
import Header from "../../_scripts/header.tsx";
import Navbar from "../../_scripts/navbar.tsx";
import Dokumente from "./dokumente.tsx";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <Dokumente />
      <Impressum />
    </>
  );
}

// deno-lint-ignore no-undef
const root = document.getElementById("app_dokumente");

if (root) {
  render(() => <App />, root);
} else {
  console.error("Root element not found");
}