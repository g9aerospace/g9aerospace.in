// Updated Footer Component

import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.container}>
        <div class={styles.leftSection}>
          <div class={styles.buttonContainer}>
            <a href="https://www.buymeacoffee.com/g9aerospace">
              <img
                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=g9aerospace&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
                alt="Buy me a coffee"
              />
            </a>
          </div>
          <p class={styles.email}>Contact us: <a href="mailto:info@g9aerospace.in">info@g9aerospace.in</a></p>
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
