import { component$, $ } from "@builder.io/qwik";
import styles from "./bbn-resource-calculator.module.css";

export default component$(() => {
  // Function to handle cost calculation
  const calculateCost = $(() => {
    // Get the input values
    const numServers = parseInt((document.getElementById("numServers") as HTMLInputElement).value) || 0;
    const memory = (parseInt((document.getElementById("memory") as HTMLInputElement).value) || 0) * 100; // Multiply by 100 for MB
    const disk = (parseInt((document.getElementById("disk") as HTMLInputElement).value) || 0) * 100; // Multiply by 100 for MB
    const cpu = (parseInt((document.getElementById("cpu") as HTMLInputElement).value) || 0) * 50; // Multiply by 50 for %

    // Calculate total cost
    const serverCost = numServers * 50;
    const memoryCost = memory; // 1 coin per MB
    const diskCost = disk * 0.25; // 0.25 coin per MB
    const cpuCost = cpu; // 1 coin per %

    const totalCost = serverCost + memoryCost + diskCost + cpuCost;

    // Display total cost and resources
    document.getElementById("totalCost")!.innerText = `Total Cost: ${totalCost} coins`;
    document.getElementById("resources")!.innerText = `(${numServers} servers, ${memory} MB memory, ${disk} MB disk, ${cpu} % CPU)`;
  });

  return (
    <div class={styles.container}>
      <h1>Resource Calculator</h1>
      <div class={styles["input-group"]}>
        {/* Number of Servers */}
        <label for="numServers">Number of Servers:</label>
        <input type="text" id="numServers" placeholder="Enter number of servers" pattern="\d*" />
      </div>
      <div class={styles["input-group"]}>
        {/* Memory */}
        <label for="memory">Memory (GB):</label>
        <input type="text" id="memory" placeholder="Enter memory (x100 will be applied)" pattern="\d*" />
      </div>
      <div class={styles["input-group"]}>
        {/* Disk */}
        <label for="disk">Disk (GB):</label>
        <input type="text" id="disk" placeholder="Enter disk space (x100 will be applied)" pattern="\d*" />
      </div>
      <div class={styles["input-group"]}>
        {/* CPU */}
        <label for="cpu">CPU (%):</label>
        <input type="text" id="cpu" placeholder="Enter CPU (x50 will be applied)" pattern="\d*" />
      </div>
      {/* Calculate Button */}
      <button onClick$={calculateCost}>Calculate</button>
      {/* Display Total Cost and Resources */}
      <div id="totalCost"></div>
      <div id="resources"></div>
    </div>
  );
});
