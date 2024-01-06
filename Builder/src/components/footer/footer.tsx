import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class={styles.wrapper}>
        <a class={styles.anchor}>
          <span>Made with ♡ by G9 Aerospace</span>
        </a>
        <a href="https://www.buymeacoffee.com/g9aerospace">
          <img
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=g9aerospace&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
            alt="Buy me a coffee"
          />
        </a>
      </div>
    </footer>
  );
});
