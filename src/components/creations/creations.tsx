import { component$ } from "@builder.io/qwik";
import styles from "./creations.module.css";
import creationsData from "../../data/creations.json";

export default component$(() => {
  return (
    <div class={styles.container}>
      <ul class={styles.creationsList}>
        {creationsData.map((creation, index) => (
          <li key={index} class={styles.creationItem}>
            <p class={styles.creationName}>{creation.name}</p>
            {creation.organisation && (
              <p class={styles.creationOrganisation}>Organisation: {creation.organisation}</p>
            )}
            {creation.website && (
              <a href={creation.website} target="_blank" rel="noopener noreferrer" class={styles.creationLink}>
                Visit Website
              </a>
            )}
            {creation.githubLink && (
              <a href={creation.githubLink} target="_blank" rel="noopener noreferrer" class={styles.creationLink}>
                GitHub Repository
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});
