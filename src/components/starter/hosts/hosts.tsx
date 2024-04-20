import { component$ } from "@builder.io/qwik";
import styles from "./hosts.module.css";

import websiteicon from "../../../media/website-icon.png";
import discordicon from "../../../media/discord-icon.png";
import hostsData from "../../../data/hosts.json";

// Define the Qwik component
export default component$(() => {
  return (
    <div class="container">
      <ul class={styles.hostList}>
        {hostsData.map((host, index) => (
          <li key={index} class={styles.hostItem}>
            <img src={host.iconPath} alt={`${host.name} Icon`} class={styles.hostIcon} />
            <div class={styles.hostInfo}>
              <p class={styles.hostName}>{host.name}</p>
                <p class={styles.cta}>
                  <a href={host.website} target="_blank" rel="noopener noreferrer">
                    <img src={websiteicon} alt="Website Icon" class={styles.websiteIcon} />
                  </a>
                  <a href={host.discordLink} target="_blank" rel="noopener noreferrer">
                    <img src={discordicon} alt="Discord Icon" class={styles.discordIcon}/>
                  </a>
                </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});
