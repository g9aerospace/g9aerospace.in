// Updated Footer Component

import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <div class={styles.leftSection}>
          <div class={styles.buttonContainer}>
            <a href="https://www.buymeacoffee.com/g9aerospace" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=g9aerospace&button_colour=var(--qwik-light-blue)&font_colour=var(--text-color)&font_family=Poppins&outline_colour=var(--qwik-dirty-black)&coffee_colour=var(--qwik-light-purple)"
                alt="Buy me a coffee"
              />
            </a>
          </div>
          <p class={styles.email}>
            Contact us: <a href="mailto:info@g9aerospace.in">info@g9aerospace.in</a>
          </p>
        </div>
        <div class={styles.rightSection}>
          <nav class={styles.navigation}>
            <a href="/privacy-policy" class={styles.link}>
              Privacy Policy
            </a>
            <a href="/terms-of-service" class={styles.link}>
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
      <div class={styles.line}></div>
      <div class={styles.authorMessage}>
        Made with ♡ by G9 Aerospace
      </div>
    </footer>
  );
});
