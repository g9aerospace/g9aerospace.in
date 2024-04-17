import { component$ } from "@builder.io/qwik";
import styles from "./carousel.module.css";

import bbn from "../../../media/bbn.png";
import eranodes from "../../../media/eranodes.png";
import legacynodes from "../../../media/legacynodes.png";
import dimehosting from "../../../media/dimehosting.png";
import destinynodes from "../../../media/destinynodes.png";

const hosts = [
  {
    name: "BBN",
    iconPath: bbn,
  },
  {
    name: "EraNodes",
    iconPath: eranodes,
  },
  {
    name: "LegacyNodes",
    iconPath: legacynodes,
  },
  {
    name: "DimeHosting",
    iconPath: dimehosting,
  },
  {
    name: "DestinyNodes",
    iconPath: destinynodes,
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
          </li>
        ))}
      </ul>
    </div>
  );
});
