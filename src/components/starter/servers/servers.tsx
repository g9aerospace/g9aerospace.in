import { component$ } from "@builder.io/qwik";
import styles from "./servers.module.css";
import websiteicon from "../../../media/website-icon.png";
import discordicon from "../../../media/discord-icon.png";
import serversData from "../../../data/servers.json";

// Import server icons
import bricksnetworkIcon from "../../../media/bricks-network.png"
import craftersggIcon from "../../../media/craftersgg.png"
import dragonnetworkIcon from "../../../media/dragon-network.png"


// Define the Qwik component
export default component$(() => {
  return (
    <div class="container">
      <ul class={styles.serverList}>
        {serversData.map((server, index) => (
          <li key={index} class={styles.serverItem}>
            {/* Use simple href with lowercase server name and target="_blank" */}
            <a class={styles.serverLink}>
              {getserverIcon(server.name)}
            </a>
            <div class={styles.serverInfo}>
              <p class={styles.serverName}>{server.name}</p>
              <p class={styles.cta}>
                {/* Links for website and Discord icons */}
                <a href={server.website} target="_blank" rel="noopener noreferrer">
                  <img src={websiteicon} alt="Website Icon" class={styles.websiteIcon} width="50" height="50" />
                </a>
                <a href={server.discordLink} target="_blank" rel="noopener noreferrer">
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

// Function to get the appropriate server icon based on the server name
function getserverIcon(serverName: string) {
  switch (serverName) {
    case "Bricks Network":
      return <img src={bricksnetworkIcon} alt="Bricks Network Icon" class={styles.serverIcon} />;
    case "CraftersGG":
      return <img src={craftersggIcon} alt="Craftersgg Icon" class={styles.serverIcon} />;      
    case "Dragon Network":
      return <img src={dragonnetworkIcon} alt="Dragon Network Icon" class={styles.serverIcon} />;
    default:
      return null;
  }
}
