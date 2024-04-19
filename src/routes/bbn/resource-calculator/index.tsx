import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./bbn.module.css"
import Calculator from "../../../components/starter/bbn-resource-calculator/bbn-resource-calculator"

export default component$(() => {
  return (
    <>
    <div class={["container", styles.hero]}>
      <h1>
        Want a  <span class="highlight">Resource calculator </span>
        <br />
        for <span class="highlight">BBN </span>hosting?
      </h1>
      <p>Check out this page</p>
      <Calculator />
    </div>

    </>
  );
});

export const head: DocumentHead = {
  title: "G9 Aerospace",
  meta: [
    {
      name: "description",
      content: "Welcome to G9 Aerospace's Portfolio website!",
    },
  ],
};
