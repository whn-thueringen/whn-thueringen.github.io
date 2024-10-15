import { render } from "solid-js/web";
import type { JSX } from "solid-js";
import Impressum from "../../_scripts/impressum.tsx";
import Header from "../../_scripts/header.tsx";
import Navbar from "../../_scripts/navbar.tsx";
import Unterstützer from "./unterstützer.tsx";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <Unterstützer />
      <Impressum />
    </>
  );
}

// deno-lint-ignore no-undef
const root = document.getElementById("app_unterstützer");

if (root) {
  render(() => <App />, root);
} else {
  console.error("Root element not found");
}

