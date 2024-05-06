/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import styles from "./carousel.module.css";

// Import images from the media folder
import bbn from "../../media/bbn.png";
import eranodes from "../../media/eranodes.png";
import legacynodes from "../../media/legacynodes.png";
import dimehosting from "../../media/dimehosting.png";
import destinynodes from "../../media/destinynodes.png";
import craftersgg from "../../media/craftersgg.png"
import dragonnetwork from "../../media/dragon-network.png";
import vypergroup from "../../media/vypergroup.png";
import embernodes from "../../media/embernodes.png";
import bricksnetwork from "../../media/bricks-network.png";
import hostysconnect from "../../media/hostys-connect.png"

const images = [bbn, eranodes, vypergroup, legacynodes, embernodes, dimehosting, hostysconnect, destinynodes, bricksnetwork, craftersgg, dragonnetwork];
// Define the Qwik component for the carousel
export default component$(() => {

  return (
    <div class={styles.carousel}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Carousel ${index}`} class={styles.image} />
      ))}
    </div>
  );
});
