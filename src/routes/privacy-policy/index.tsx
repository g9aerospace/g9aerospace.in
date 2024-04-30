import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./privacy-policy.module.css";

export default component$(() => {
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div id="privacy-policy" class={`${styles.container} ${styles.containerCenter}`}>
        <h1>
          Privacy Policy
        </h1>
        <p>
          Welcome to the Privacy Policy of g9aerospace.in. This page informs you of my policies regarding the collection, use, and disclosure of personal data when you use my service and the choices you have associated with that data. I use your data to provide and improve the service. By using the service, you agree to the collection and use of information in accordance with this policy.
        </p>
        <h4 class={styles.sectionTitle}>Information Collection and Use</h4>
        <p>
          I collect several different types of information for various purposes to provide and improve my service to you.
        </p>
        <h4 class={styles.sectionTitle}>Types of Data Collected</h4>
        <p>
          While using the service, I may ask you to provide me with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>Cookies and Usage Data</li>
        </ul>
        <h4 class={styles.sectionTitle}>Usage Data</h4>
        <p>
          I may also collect information how the service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
        </p>
        <h4 class={styles.sectionTitle}>Tracking & Cookies Data</h4>
        <p>
          I use cookies and similar tracking technologies to track the activity on my service and hold certain information.
        </p>
        <p>
          Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our service.
        </p>
        <h4 class={styles.sectionTitle}>Contact Me</h4>
        <p>
          If you have any questions about this Privacy Policy, please contact me at <a href="mailto:support@g9aerospace.in">support@g9aerospace.in</a>.
        </p>
        <p>
          Please note that I take no responsibility for any and all losses, damages, or other liabilities resulting from the use of my service. The service is provided on an "as is" and "as available" basis, and I make no warranties, express or implied, regarding the service or its availability.
        </p>
        <p>
          Users are advised to use the service only if they agree to these terms and conditions and understand that I will not be held liable for any and all losses, damages, or other liabilities resulting from the use of the service.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content: "Read my privacy policy to understand how I collect and use your data.",
    },
  ],
};
