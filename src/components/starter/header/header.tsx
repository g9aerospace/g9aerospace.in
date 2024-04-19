import { component$} from "@builder.io/qwik";
import styles from "./header.module.css";
import g9aerospacelogo from "../../../media/g9aerospace.png";
export default component$(() => {

  return (
    <header class={`${styles.header}`}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={g9aerospacelogo} alt="G9Aerospace Icon" width="100" height="100" />
        </div>
        <ul class={styles.navList}>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </header>
  );
});