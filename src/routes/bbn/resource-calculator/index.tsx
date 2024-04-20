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

    </div>
    <Calculator />
    </>
  );
});

export const head: DocumentHead = {
  title: "BBN Resource Calculator",
  meta: [
    {
      name: "description",
      content: "Use this calculator to calculate the coins you require for the resources you wish to acquire",
    },
  ],
};
