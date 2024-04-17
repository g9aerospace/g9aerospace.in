import { component$ } from "@builder.io/qwik";
import styles from "./hosts.module.css";

import websiteicon from "../../../media/website-icon.png"
import discordicon from "../../../media/discord-icon.png"
import bbn from "../../../media/bbn.png";
import eranodes from "../../../media/eranodes.png";
import legacynodes from "../../../media/legacynodes.png";
import dimehosting from "../../../media/dimehosting.png";
import destinynodes from "../../../media/destinynodes.png";

const hosts = [
  {
    name: "BBN",
    iconPath: bbn,
    website: "https://bbn.one/",
    discordLink: "https://discord.gg/bbn-hosting-757966278936756345",
  },
  {
    name: "EraNodes",
    iconPath: eranodes,
    website: "https://client.eranodes.xyz/",
    discordLink: "https://discord.gg/8YdG2p3etY",
  },
  {
    name: "LegacyNodes",
    iconPath: legacynodes,
    website: "https://dash.legacynodes.com/home",
    discordLink: "https://discord.gg/cCDcCSm3y2",
  },
  {
    name: "DimeHosting",
    iconPath: dimehosting,
    website: "https://dash.dimehosting.xyz/",
    discordLink: "https://discord.gg/3MjvwQmReM",
  },
  {
    name: "DestinyNodes",
    iconPath: destinynodes,
    website: "https://discord.com/invite/hnueYjdSgA",
    discordLink: "https://discord.gg/3MjvwQmReM",
  },
];

// Define the Qwik component
export default component$(() => {
  return (
    <div class="container">
      <ul class={styles.hostList}>
        {hosts.map((host, index) => (
          <li key={index} class={styles.hostItem}>
            <img src={host.iconPath} alt={`${host.name} Icon`} class={styles.hostIcon} />
            <div class={styles.hostInfo}>
              <h4>{host.name}</h4>
              <p>
                <a href={host.website} target="_blank" rel="noopener noreferrer">
                  <img src={websiteicon} alt="Website Icon" class={styles.websiteIcon} /> {/* Replace "path_to_website_icon" with the path to the website icon */}
                </a>
              </p>
              <p>
                <a href={host.discordLink} target="_blank" rel="noopener noreferrer">
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
