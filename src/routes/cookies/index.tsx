import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./cookies.module.css";

export default component$(() => {
  return (
    <>
      <div role="presentation" class="ellipsis ellipsis-green"></div>
      <div id="cookies-policy" class={`${styles.container} ${styles.containerCenter}`}>
        <h1>
          Cookies Policy
        </h1>
        <p>
          This website uses cookies to enhance the user experience and for analytics purposes. By using my website, you consent to the use of cookies in accordance with this Cookies Policy.
        </p>
        <h4 class={styles.sectionTitle}>What Are Cookies</h4>
        <p>
          Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
        </p>
        <h4 class={styles.sectionTitle}>How I Use Cookies</h4>
        <p>
          When you use and access the Service, I may place a number of cookies files in your web browser. I use cookies for the following purposes:
        </p>
        <ul>
          <li>To enable certain functions of the Service</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
          <li>To enable advertisements delivery, including behavioral advertising</li>
        </ul>
        <p>
          I use both session and persistent cookies on the Service and I use different types of cookies to run the Service:
        </p>
        <ul>
          <li>Essential cookies: I may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
          <li>Analytical/performance cookies: I may use analytical/performance cookies to analyze how users interact with the Service, to monitor the performance of the Service, and to improve the Service.</li>
          <li>Functionality cookies: I may use functionality cookies to recognize you on the Service and remember your preferences.</li>
          <li>Advertising cookies: I may use advertising cookies to serve you with advertisements that may be relevant to you and your interests.</li>
        </ul>
        <p>
          For more information on cookies, please visit <a href="https://www.allaboutcookies.org/">All About Cookies</a>.
        </p>
        <h4 class={styles.sectionTitle}>How to Control Cookies</h4>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
        </p>
        <p>
          For more information on how to control cookies, check your browser or device’s settings for how you can control or reject cookies.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "G9 Aerospace - Cookies Policy",
  meta: [
    {
      name: "description",
      content: "Read my cookies policy to understand how I use cookies on my website for analytics and other purposes.",
    },
  ],
};