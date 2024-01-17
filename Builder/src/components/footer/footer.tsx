import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <section class={styles.container}>
        <div class={styles.leftSection}>
          <div class={styles.buttonContainer}>
            {/* Replace Buy me a coffee button with GitHub Sponsors button */}
            <iframe
              src="https://github.com/sponsors/g9militantsYT/button"
              title="Sponsor g9militantsYT"
              height="32"
              width="114"
              style={{ border: 0, borderRadius: '6px' }}
            ></iframe>
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
      </section>
      <div class={styles.line}></div>
      <div class={styles.authorMessage}>
        G9 Aerospace | 2024
      </div>
    </footer>
  );
});
