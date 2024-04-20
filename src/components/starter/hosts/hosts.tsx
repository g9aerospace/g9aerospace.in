import { component$ } from "@builder.io/qwik";
import styles from "./hosts.module.css";
import websiteicon from "../../../media/website-icon.png";
import discordicon from "../../../media/discord-icon.png";
import hostsData from "../../../data/hosts.json";

// Import host icons
import bbnIcon from "../../../media/bbn.png";
import eranodesIcon from "../../../media/eranodes.png";
import legacynodesIcon from "../../../media/legacynodes.png";
import dimehostingIcon from "../../../media/dimehosting.png";
import destinynodesIcon from "../../../media/destinynodes.png";

// Define the Qwik component
export default component$(() => {
  return (
    <div class="container">
      <ul class={styles.hostList}>
        {hostsData.map((host, index) => (
          <li key={index} class={styles.hostItem}>
            {/* Use simple href with lowercase host name and target="_blank" */}
            <a href={`/${host.name.toLowerCase()}`} target="_blank" rel="noopener noreferrer" class={styles.hostLink}>
              {getHostIcon(host.name)}
            </a>
            <div class={styles.hostInfo}>
              <p class={styles.hostName}>{host.name}</p>
              <p class={styles.cta}>
                {/* Links for website and Discord icons */}
                <a href={host.website} target="_blank" rel="noopener noreferrer">
                  <img src={websiteicon} alt="Website Icon" class={styles.websiteIcon} width="50" height="50" />
                </a>
                <a href={host.discordLink} target="_blank" rel="noopener noreferrer">
                  <img src={discordicon} alt="Discord Icon" class={styles.discordIcon} width="50" height="50" />
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

// Function to get the appropriate host icon based on the host name
function getHostIcon(hostName: string) {
  switch (hostName) {
    case "BBN":
      return <img src={bbnIcon} alt="BBN Icon" class={styles.hostIcon} />;
    case "EraNodes":
      return <img src={eranodesIcon} alt="EraNodes Icon" class={styles.hostIcon} />;
    case "LegacyNodes":
      return <img src={legacynodesIcon} alt="LegacyNodes Icon" class={styles.hostIcon} />;
    case "DimeHosting":
      return <img src={dimehostingIcon} alt="DimeHosting Icon" class={styles.hostIcon} />;
    case "DestinyNodes":
      return <img src={destinynodesIcon} alt="DestinyNodes Icon" class={styles.hostIcon} />;
    default:
      return null;
  }
}
