import { component$ } from "@builder.io/qwik";
import styles from "./sidebar.module.css";
import g9aerospacelogo from "../../media/g9aerospace.png";
import hostsData from "../../data/hosts.json";
import serversData from "../../data/servers.json";

export default component$(() => {
  return (
    <aside class={styles.sidebar}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={g9aerospacelogo} alt="G9Aerospace Icon" width="100" height="100" />
        </div>
        <a class={styles.title}>G9 Aerospace</a>
        <hr class={styles.separator} />
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
                <button class={styles.dropbtn}><a id="dropbtn" href="/#hosts">Hosts</a></button>
                <div class={styles.dropdownContent}>
                  {hostsData.map(host => (
                    <a key={host.name} href={`/hosts/${host.name.toLowerCase()}`} class={styles.dropdownItem}>{host.name}</a>
                  ))}
                </div>
              </div>
              {/* Servers Section */}
              <div class={styles.dropdown}>
                <button class={styles.dropbtn}><a id="dropbtn" href="/#servers">Servers</a></button>
                <div class={styles.dropdownContent}>
                  {serversData.map(server => (
                    <a key={server.name} href={`/servers/${server.name.toLowerCase()}`} class={styles.dropdownItem}>{server.name}</a>
                  ))}
                </div>
              </div>
              <li><a href="/#creations">Creations</a></li>
            </ul>
          </div>

          <div class={styles.section}>
            <ul class={styles.navList}>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/cookies">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class={styles.socialIcons}>
          <a href="https://www.instagram.com/g9aerospace/" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=Xy10Jcu1L2Su&format=png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@G9AEROSPACEYT" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=19318&format=png" alt="Youtube" />
          </a>
          <a href="https://github.com/g9militantsYT" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=52539&format=png" alt="GitHub" />
          </a>
          <a href="https://discord.gg/gfzDMS7tQD" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=30998&format=png" alt="Discord" />
          </a>
          <a href="https://steamcommunity.com/id/g9aerospace/" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=zNqjI8XKkCv0&format=png" alt="Steam" />
          </a>
      </div>
    </aside>
  );
});
