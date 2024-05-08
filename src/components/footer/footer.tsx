import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import packageJson from "../../../package.json";

export default component$(() => {
  const version = packageJson.version;

  return (
    <footer>
      <a href="https://www.builder.io/" target="_blank" class={styles.anchor}>
        <span>&copy; {new Date().getFullYear()} G9Aerospace. All rights reserved.</span>
        <span class={styles.spacer}>|</span>
        <span>v{version}</span>
      </a>
    </footer>
  );
});
