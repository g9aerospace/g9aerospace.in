import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.row}>
        <div class={styles.column}>
          <div class={styles.aboutUs}>
            <h4>About Me</h4>
            <p>Passionate about aerospace and a coding enthusiast.</p>
          </div>

          <div class={styles.contact}>
            <h4>Contact Me</h4>
            <p>Email: <a href="mailto:info@g9aerospace.in">info@g9aerospace.in</a></p>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.privacyTerms}>
            <h4>Links</h4>
            <a href="/privacy-policy" class={styles.link}>Privacy Policy</a>
            <br></br>
            <a href="/terms-of-service" class={styles.link}>Terms of Service</a>
            <br></br>
            <a href="/cookies-policy" class={styles.link}>Cookies Policy</a>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.partnerships}>
            <h4>Partnerships</h4>
            <p>I collaborate with industry leaders to provide the best solutions.</p>
            <p>Partnership: <a href="mailto:partnership@g9aerospace.in">partnership@g9aerospace.in</a></p>

            {/* Social Media Icons */}
            <h4>Stay Connected</h4>
            <div class={styles.socialIcons}>

              {/* GitHub Sponsorship Button */}
              <iframe class={styles.sponsor}
                src="https://github.com/sponsors/g9militantsYT/button"
                title="Sponsor g9militantsYT"
                height="32"
                width="114"
                style={{ border: '0', borderRadius: '6px' }}>
              </iframe>

              <a href="https://www.instagram.com/g9aerospace/" target="_blank">
                <img src="https://img.icons8.com/?size=256&id=Xy10Jcu1L2Su&format=png" alt="Instagram" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://www.youtube.com/@G9AEROSPACEYT" target="_blank">
                <img src="https://img.icons8.com/?size=256&id=19318&format=png" alt="Youtube" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://github.com/g9militantsYT" target="_blank">
                <img src="https://img.icons8.com/?size=256&id=52539&format=png" alt="GitHub" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://discord.gg/gfzDMS7tQD" target="_blank">
                <img src="https://img.icons8.com/?size=256&id=30998&format=png" alt="Discord" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://steamcommunity.com/id/g9aerospace/" target="_blank">
                <img src="https://img.icons8.com/?size=256&id=zNqjI8XKkCv0&format=png" alt="Steam" style={{ maxHeight: '30px' }} />
              </a>

              <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="g9aerospace" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

            </div>
          </div>
        </div>

        <div class={styles.copyrightBox}>
          <div class={styles.copyright}>
            <p>&copy; 2024 G9 Aerospace. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
});