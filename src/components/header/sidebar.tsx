import { component$ } from "@builder.io/qwik";
import styles from "./sidebar.module.css";
import g9aerospacelogo from "../../media/g9aerospace.png";

export default component$(() => {
  return (
    <aside class={`${styles.sidebar}`}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={g9aerospacelogo} alt="G9Aerospace Icon" width="100" height="100" />
        </div>
        <div class={styles.sections}>
          {/* First Section */}
          <div class={styles.section}>
            <ul class={styles.navList}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          {/* Second Section */}
          <div class={styles.section}>
            <ul class={styles.navList}>
              <li><a href="/#hosts">Hosts</a></li>
              <li><a href="/#servers">Servers</a></li>
              <li><a href="/#creations">Creations</a></li>
            </ul>
          </div>

          {/* Third Section */}
          <div class={styles.section}>
            <ul class={styles.navList}>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
});
