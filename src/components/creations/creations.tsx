import { component$ } from "@builder.io/qwik";
import styles from "./creations.module.css";

import websiteicon from "../../media/website-icon.png"
import githubIcon from "../../media/discord-icon.png"

const creations = [
  {
    name: "Monitor",
    organisation: "EraNodes",
    website: "https://status.eranodes.xyz",
    githubLink: "https://github.com/Eranodes/Monitor",
  },
  {
    name: "EraNodes Utils Bot",
    organisation: "EraNodes",
    website: "",
    githubLink: "https://github.com/Eranodes/EraNodes-Utils",
  },
  {
    name: "Craft File Reader",
    organisation: "KSPCommunity",
    website: "https://www.npmjs.com/package/@kspcommunity/craft-file-reader",
    githubLink: "https://github.com/kspcommunity/Craft-File-Reader",
  },
  {
    name: "KSP Community Website",
    organisation: "KSPCommunity",
    website: "https://kspcommunity.com/",
    githubLink: "https://github.com/kspcommunity/kspcommunity.com",
  },
  {
    name: "KSP Community Discord Bot",
    organisation: "KSPCommunity",
    website: "",
    githubLink: "https://github.com/kspcommunity/KSP-Community-Bot",
  },
  {
    name: "KSP Mod Parts List",
    organisation: "KSPCommunity",
    website: "https://mod-parts.kspcommunity.com/data.json",
    githubLink: "https://github.com/kspcommunity/Mod-Parts-Lister",
  },
  {
    name: "MoonRock",
    organisation: "VyperGroup",
    website: "https://github.com/VyperGroup/Moonrock",
    githubLink: "https://github.com/VyperGroup/Moonrock",
  },
  {
    name: "g9aerospace.in",
    organisation: "",
    website: "https://g9aerospace.in",
    githubLink: "https://github.com/g9militantsYT/g9aerospace.in",
  },
  {
    name: "Phoenix",
    organisation: "",
    website: "",
    githubLink: "https://github.com/g9militantsYT/Phoenix",
  },
  {
    name: "BBN Resource Calculator",
    organisation: "BBN",
    website: "https://bbn.g9aerospace.in/",
    githubLink: "https://github.com/g9militantsYT/BBN-Resource-Calculator",
  },
  {
    name: "Minecraft Server Showcase Bot",
    organisation: "",
    website: "",
    githubLink: "https://github.com/g9militantsYT/Minecraft-Server-Showcase",
  },
];

// Define the Qwik component
export default component$(() => {
  return (
    <div class="container">
      <ul class={styles.creationList}>
        {creations.map((creation, index) => (
          <li key={index} class={`${styles.creationItem} card`}>
            <div class="name">{creation.name}</div>
            <div class="content">
              <h4>{creation.organisation}</h4>
              <p>
                <a href={creation.website} target="_blank" rel="noopener noreferrer">
                  <img src={websiteicon} alt="Website Icon" class={`${styles.websiteIcon} websiteIcon`} />
                </a>
              </p>
              <p>
                <a href={creation.githubLink} target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="Discord Icon" class={`${styles.githubIcon} githubIcon`} />
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

