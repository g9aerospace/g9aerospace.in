import { component$ } from "@builder.io/qwik";
import styles from "./servers.module.css";

import websiteicon from "../../../media/website-icon.png"
import discordicon from "../../../media/discord-icon.png"

import bricksnetwork from "../../../media/bricks-network.png";
import dragonnetwork from "../../../media/dragon-network.png";
import craftersgg from "../../../media/craftersgg.png";

const servers = [
  {
    name: "Bricks Network",
    iconPath: bricksnetwork,
    website: "https://bricks-network.xyz",
    discordLink: "https://discord.gg/uRuPDJ5j",
  },
  {
    name: "Dragon Network",
    iconPath: dragonnetwork,
    website: "https://https://dragonnetwork.digital",
    discordLink: "https://discord.gg/ukzxwAujZM",
  },
  {
    name: "CraftersGG",
    iconPath: craftersgg,
    website: "https://craftersgg.site/",
    discordLink: "https://discord.gg/CwWbWm5FKq",
  },
];

// Define the Qwik component
export default component$(() => {
  return (
    <div class="container">
      <ul class={styles.serverList}>
        {servers.map((server, index) => (
          <li key={index} class={styles.serverItem}>
            <img src={server.iconPath} alt={`${server.name} Icon`} class={styles.serverIcon} />
            <div class={styles.serverInfo}>
              <h4>{server.name}</h4>
              <p>
                <a href={server.website} target="_blank" rel="noopener noreferrer">
                  <img src={websiteicon} alt="Website Icon" class={styles.websiteIcon} /> {/* Replace "path_to_website_icon" with the path to the website icon */}
                </a>
              </p>
              <p>
                <a href={server.discordLink} target="_blank" rel="noopener noreferrer">
                  <img src={discordicon} alt="Discord Icon" class={styles.discordIcon}/> {/* Replace "path_to_discord_icon" with the path to the Discord icon */}
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});
