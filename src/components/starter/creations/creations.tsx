import { component$ } from "@builder.io/qwik";
import styles from "./creations.module.css";

import websiteicon from "../../../media/website-icon.png"
import discordicon from "../../../media/discord-icon.png"

const organisations = [
  {
    name: "Bricks Website",
    organisation: "Bricks Network",
    website: "https://bricks-network.xyz",
    discordLink: "https://discord.gg/uRuPDJ5j",
  },
  {
    name: "Dragon Network Website",
    organisation: "Dragon Network",
    website: "https://dragonnetwork.digital",
    discordLink: "https://discord.gg/ukzxwAujZM",
  },
  {
    name: "CraftersGG Websute",
    organisation: "CraftersGG",
    website: "https://craftersgg.site/",
    discordLink: "https://discord.gg/CwWbWm5FKq",
  },
];

// Define the Qwik component
export default component$(() => {
  return (
    <div class="container">
      <ul class={styles.creationList}>
        {organisations.map((creation, index) => (
          <li key={index} class={styles.creationItem}>
            <div class={styles.creationInfo}>
              <h4>{creation.name}</h4>
              <a>{creation.organisation}</a>
              <p>
                <a href={creation.website} target="_blank" rel="noopener noreferrer">
                  <img src={websiteicon} alt="Website Icon" class={styles.websiteIcon} /> {/* Replace "path_to_website_icon" with the path to the website icon */}
                </a>
              </p>
              <p>
                <a href={creation.discordLink} target="_blank" rel="noopener noreferrer">
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
