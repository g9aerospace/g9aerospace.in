import { component$ } from "@builder.io/qwik";
import styles from "./sidebar.module.css";
import g9aerospacelogo from "../../media/g9aerospace.png";
import hostsData from "../../data/hosts.json";

export default component$(() => {

  return (
    <aside class={styles.sidebar}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={g9aerospacelogo} alt="G9Aerospace Icon" width="100" height="100" />
        </div>
        <div class={styles.sections}>
          {/* Other Sections */}
          <div class={styles.section}>
            <ul class={styles.navList}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div class={styles.section}>
            <ul class={styles.navList}>
              {/* Hosts Section */}
              <div class={styles.dropdown}>
                <button class={styles.dropbtn}>Hosts</button>
                <div class={styles.dropdownContent}>
                  {hostsData.map(host => (
                    <a key={host.id} href={`/hosts/${host.name.toLowerCase()}`} class={styles.dropdownItem}>{host.name}</a>
                  ))}
                </div>
              </div>
              <li><a href="/#servers">Servers</a></li>
              <li><a href="/#creations">Creations</a></li>
            </ul>
          </div>

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
