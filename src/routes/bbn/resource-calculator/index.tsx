import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./bbn.module.css";
import Calculator from "../../../components/starter/bbn-resource-calculator/bbn-resource-calculator";

export default component$(() => {

  return (
    <>
      <div class={["container", styles.hero]}>
        <h1>
          Want a <span class="highlight">Resource calculator </span>
          <br />
          for <span class="highlight">BBN </span>hosting?
        </h1>
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
            const calculatorElement = document.getElementById("calculator");
            if (calculatorElement) {
              calculatorElement.scrollIntoView({ behavior: "smooth" });
            }
          }, 1000); // Adjust the delay time as needed
        }}
      >
        Go to calculator
      </button>
      </div>
      <div id="calculator" class={styles.calculatorContainer}>
        <Calculator />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "BBN Resource Calculator",
  meta: [
    {
      name: "description",
      content: "Use this calculator to calculate the coins you require for the resources you wish to acquire",
    },
  ],
};
