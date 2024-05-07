import { component$ } from "@builder.io/qwik";
import styles from "./hosts.module.css";
import websiteicon from "../../media/website-icon.png";
import discordicon from "../../media/discord-icon.png";
import hostsData from "../../data/hosts.json";

// Import host icons
import bbnIcon from "../../media/bbn.png";
import eranodesIcon from "../../media/eranodes.png";
import legacynodesIcon from "../../media/legacynodes.png";
import dimehostingIcon from "../../media/dimehosting.png";
import destinynodesIcon from "../../media/destinynodes.png";

// Import type icons
import minecraftIcon from "../../media/minecraft-icon.png";
import gtaIcon from "../../media/gta-icon.png";
import palworldIcon from "../../media/palworld-icon.png";
import codeIcon from "../../media/code-icon.png";
import voiceIcon from "../../media/voice-icon.png";

// Define the Qwik component
export default component$(() => {
  return (
    <ul class={styles.hostList}>
      {hostsData.map((host, index) => (
        <li key={index} class={styles.hostItem}>
          <a href={`/hosts/${host.name.toLowerCase()}`} target="_blank" rel="noopener noreferrer" class={styles.hostLink}>
            {getHostIcon(host.name)}
          </a>
          <div class={styles.hostInfo}>
            <p class={styles.hostName}>{host.name}</p>
            <p class={styles.cta}>
              <a href={host.website} target="_blank" rel="noopener noreferrer">
                <img src={websiteicon} alt="Website" class={styles.websiteIcon} width="50" height="50" />
              </a>
              <a href={host.discordLink} target="_blank" rel="noopener noreferrer">
                <img src={discordicon} alt="Discord" class={styles.discordIcon} width="50" height="50" />
              </a>
            </p>
          </div>
          <div class={styles.supportedTypes}>
            {host.type && host.type.split(',').map((type, idx) => (
              <div key={idx} class={styles.typeCard}>
                {getTypeIcon(type.trim())}
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
});

function getTypeIcon(type: string) {
  switch (type.toLowerCase()) {
    case "minecraft":
      return <img src={minecraftIcon} alt="Minecraft Icon" class={styles.typeIcon} />;
    case "gta":
      return <img src={gtaIcon} alt="GTA Icon" class={styles.typeIcon} />;
    case "palworld":
      return <img src={palworldIcon} alt="Palworld Icon" class={styles.typeIcon} />;
    case "code":
      return <img src={codeIcon} alt="Code Icon" class={styles.typeIcon} />;
    case "voice":
      return <img src={voiceIcon} alt="Voice Icon" class={styles.typeIcon} />;
    default:
      return null;
  }
}

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