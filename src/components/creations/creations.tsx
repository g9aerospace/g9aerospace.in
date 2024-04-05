import { component$ } from "@builder.io/qwik";
import styles from "./creations.module.css";

export default component$(() => {
  const aquaLogoUrl = "https://github.com/g9militantsYT/g9aerospace.in-old/blob/main/assets/images/g9aerospace.png?raw=true";

  return (
    <div class={styles.container}>
      <img src={aquaLogoUrl} alt="G9 Aerospace Logo" class={styles.logo} />
      <h1>Welcome to G9 Aerospace</h1>
      <p>
        G9 Aerospace is dedicated to innovation and excellence in the field of aerospace engineering.
        We specialize in designing and manufacturing cutting-edge aircraft and space vehicles.
      </p>
      <p>
        Explore our creations and discover the future of flight with G9 Aerospace.
      </p>
    </div>
  );
});
