import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "../../media/su27-2-transparent.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} alt="Image thunder" />
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p>Have fun exploring my website!</p>
      <div class={styles["button-group"]}>
      <button
        class={styles["youtube-button"]}
        onClick$={async () => {
          const defaults = {
            spread: 360,
            ticks: 70,
            gravity: 0,
            decay: 0.95,
            startVelocity: 30,
            colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
            origin: {
              x: 0.5,
              y: 0.35,
            },
          };

          function loadConfetti() {
            return new Promise<(opts: any) => void>((resolve, reject) => {
              if ((globalThis as any).confetti) {
                return resolve((globalThis as any).confetti as any);
              }
              const script = document.createElement("script");
              script.src =
                "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
              script.onload = () =>
                resolve((globalThis as any).confetti as any);
              script.onerror = reject;
              document.head.appendChild(script);
              script.remove();
            });
          }

          const confetti = await loadConfetti();

          function shoot() {
            confetti({
              ...defaults,
              particleCount: 80,
              scalar: 1.2,
            });

            confetti({
              ...defaults,
              particleCount: 60,
              scalar: 0.75,
            });
          }

          setTimeout(shoot, 0);
          setTimeout(shoot, 100);
          setTimeout(shoot, 200);
          setTimeout(shoot, 300);
          setTimeout(shoot, 400);

          // Open website in new tab after animation
          setTimeout(() => {
            window.open("https://www.youtube.com/@G9AEROSPACEYT", "_blank");
          }, 990); // Adjust the delay time as needed
        }}
      >
        Youtube
      </button>
      <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="g9aerospace" data-color="#5F7FFF" data-emoji="🛩️"  data-font="Inter" data-text="Buy me a Su-30 MKK" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>
      </div>
    </div>
  );
});
