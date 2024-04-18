import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/starter/hero/hero";
import Infobox from "../components/starter/infobox/infobox";
import Starter from "../components/starter/next-steps/next-steps";
import Hosts from "../components/starter/hosts/hosts";
import Servers from "../components/starter/servers/servers";
import Creations from "../components/starter/creations/creations";

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      
      <div class="container container-center container-spacing-xl">
        <h3>
          You can count on these <span class="highlight">Hosts</span>
        </h3>
        <Hosts />
      </div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You can play on these <span class="highlight">Servers</span>
        </h3>
        <Servers />
      </div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You can check out these <span class="highlight">Creations</span>
        </h3>
        <Creations />
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            CLI Commands
          </div>
          <>
            <p>
              <code>npm run dev</code>
              <br />
              Starts the development server and watches for changes
            </p>
            <p>
              <code>npm run preview</code>
              <br />
              Creates production build and starts a server to preview it
            </p>
            <p>
              <code>npm run build</code>
              <br />
              Creates production build
            </p>
            <p>
              <code>npm run qwik add</code>
              <br />
              Runs the qwik CLI to add integrations
            </p>
          </>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Example Apps
            </div>
            <p>
              Have a look at the <a href="/demo/flower">Flower App</a> or the{" "}
              <a href="/demo/todolist">Todo App</a>.
            </p>
          </Infobox>

          <Infobox>
            <div q:slot="title" class="icon icon-community">
              Community
            </div>
            <ul>
              <li>
                <span>Questions or just want to say hi? </span>
                <a href="https://qwik.dev/chat" target="_blank" rel="noopener">
                  Chat on discord!
                </a>
              </li>
              <li>
                <span>Follow </span>
                <a href="https://twitter.com/QwikDev" target="_blank" rel="noopener" >
                  @QwikDev
                </a>
                <span> on Twitter</span>
              </li>
              <li>
                <span>Open issues and contribute on </span>
                <a href="https://github.com/BuilderIO/qwik" target="_blank" rel="noopener">
                  GitHub
                </a>
              </li>
              <li>
                <span>Watch </span>
                <a href="https://qwik.dev/media/" target="_blank" rel="noopener">
                  Presentations, Podcasts, Videos, etc.
                </a>
              </li>
            </ul>
          </Infobox>
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
