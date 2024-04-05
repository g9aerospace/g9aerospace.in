// input.tsx

import { component$ } from "@builder.io/qwik";
import styles from "./input.module.css";

export default component$(() => {
  return (
    <div class={styles.inputWrapper}>
      <input type="text" class={styles.inputField} placeholder="Enter your text here" />
    </div>
  );
});
