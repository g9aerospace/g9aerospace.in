import { component$} from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {

  const aquaLogoUrl = "https://github.com/g9militantsYT/g9aerospace.in-old/blob/main/assets/images/g9aerospace.png?raw=true";

  return (
    <header class={`${styles.header} ${styles.animatedBackground}`}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={aquaLogoUrl} alt="Aqua Logo" class={styles.animatedLogo} />
        </div>
        <ul class={styles.navList}>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </header>
  );
});