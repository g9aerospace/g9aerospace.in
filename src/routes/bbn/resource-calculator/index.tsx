import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./bbn.module.css"
import ImgThunder from "../../../media/bbn.png?jsx"

export default component$(() => {
  return (
    <>
<div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} alt="Image thunder" />
      <h1>
        Want a  <span class="highlight">FREE 24x7 </span>
        <br />
        <span class="highlight">Minecraft </span>host?
      </h1>
      <p>Check out BBN Hosting!</p>
      <div class={styles["button-group"]}>
      <button
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
            window.open("https://bbn.one/hosting", "_blank");
          }, 2000); // Adjust the delay time as needed
        }}
      >
        Website
      </button>
      <button
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
          window.open("https://discord.gg/bbn-hosting-757966278936756345", "_blank");
        }, 2000); // Adjust the delay time as needed
      }}
    >
      Discord
      </button>
      </div>
    </div>

    </>
  );
});

export const head: DocumentHead = {
  title: "G9 Aerospace",
  meta: [
    {
      name: "description",
      content: "Welcome to G9 Aerospace's Portfolio website!",
    },
  ],
};
