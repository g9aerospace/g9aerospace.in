import { component$ } from "@builder.io/qwik";
import styles from "./carousel.module.css";

import bbn from "../../../media/bbn.png";
import eranodes from "../../../media/eranodes.png";
import legacynodes from "../../../media/legacynodes.png";
import dimehosting from "../../../media/dimehosting.png";
import destinynodes from "../../../media/destinynodes.png";
import bricksnetwork from "../../../media/bricks-network.png";

const orgs = [
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
  {
    name: "Bricks Network",
    iconpath: bricksnetwork,
  },
];

// Define the Qwik component
export default component$(() => {
  return (
    <div class="container">
      <ul class={styles.orgList}>
        {orgs.map((org, index) => (
          <li key={index} class={styles.orgItem}>
            <img src={org.iconPath} alt={`${org.name} Icon`} class={styles.orgIcon} />
          </li>
        ))}
      </ul>
    </div>
  );
});
