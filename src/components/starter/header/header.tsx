import { component$} from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {

  const aquaLogoUrl = "https://raw.githubusercontent.com/g9militantsYT/g9aerospace.in/main/src/media/g9aerospace.png";

  return (
    <header class={`${styles.header} ${styles.animatedBackground}`}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={aquaLogoUrl} alt="Aqua Logo" class={styles.animatedLogo} width="100" height="100" />
        </div>
        <ul class={styles.navList}>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </header>
  );
});