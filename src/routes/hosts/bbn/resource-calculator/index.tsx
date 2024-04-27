import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./bbn.module.css";
import Calculator from "../../../../components/bbn-resource-calculator/bbn-resource-calculator";
import bbn from "../../../../media/bbn.png"

export default component$(() => {

  return (
    <>
      <div class={["container", styles.hero]}>
        <h1>
          Want a <span class="highlight">Resource calculator </span>
          <br />
          for <span class="highlight">BBN </span>hosting?
        </h1>
      </div>
      <div id="calculator" class={styles.calculatorContainer}>
        <Calculator />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "BBN Calculator",
  meta: [
    {
      name: "description",
      content: "Use this calculator to calculate the coins you require for the resources you wish to acquire",
    },
    {
      property: "og:image",
      content: bbn,
    },
  ],
};
