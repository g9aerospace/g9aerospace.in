import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        {/* Updated left section */}
        <div class={styles.left}>
          G9 Aerospace
        </div>

        {/* Updated right section with navigation menu */}
        <ul class={styles.navMenu}>
          <li><a href="/">Home</a></li>
          <li>
            <span>Games</span>
            {/* Dropdown content */}
            <div class={styles.dropdownContent}>
              <a href="/minecraft">Minecraft</a>
              <a href="/kerbal-space-program">Kerbal Space Program</a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
});
