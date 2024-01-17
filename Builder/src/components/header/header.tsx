import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import logoSvg from "./g9aerospace.svg"; // Import your SVG file

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        {/* Updated left section with SVG image */}
        <div class={styles.left}>
          <img src={logoSvg} alt="Logo" class={styles.logo} />
          G9 Aerospace
        </div>

        {/* Updated right section with navigation menu */}
        <ul class={styles.navMenu}>
          <li><a href="/">Home</a></li>
          <li>
            <span>Games</span>
            {/* Dropdown content */}
            <div class={styles.dropdownContent}>
              <a href="https://bricks-network.xyz/" target="Bricks Network">Minecraft</a>
              <a href="https://kerbalx.com/G9_Militants" target="KerbalX">Kerbal Space Program</a>
            </div>
          </li>
          <li>
            <span>Projects</span>
            <div class={styles.dropdownContent}>
              <a href="https://github.com/g9militantsYT/Minecraft-Server-Showcase" target="Github">Showcase Bot</a>
              <a href="https://github.com/g9militantsYT/Phoenix" target="Github">Phoenix</a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
});
