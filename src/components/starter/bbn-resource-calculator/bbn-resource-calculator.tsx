import { component$ } from "@builder.io/qwik";
import styles from "./bbn-resource-calculator.module.css";

export default component$(() => {
  return (
    <div class={["container"]}>
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p>Have fun exploring my website!</p>
      <div class={styles["button-group"]}>
      </div>
    </div>
  );
});
