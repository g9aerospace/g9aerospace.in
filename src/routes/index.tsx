import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/hero/hero";
import Carousel from "../components/carousel/carousel";
import Hosts from "../components/hosts/hosts";
import Servers from "../components/servers/servers";
import Creations from "../components/creations/creations";

export default component$(() => {
  return (
    <>
      <Hero />
      <Carousel />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-blue"></div>
      
      <div id="hosts" class="container container-center">
        <h3>
          You can count on these <span class="highlight">Hosts</span>
        </h3>
        <Hosts />
      </div>

      <div id="servers"class="container container-center">
        <h3>
          You can play on these <span class="highlight">Servers</span>
        </h3>
        <Servers />
      </div>

      <div id="creations" class="container container-center">
        <h3>
          You can check out these <span class="highlight">Creations</span>
        </h3>
        <Creations />
      </div>

    </>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      name: "description",
      content: "Welcome to G9 Aerospace's Portfolio website!",
    },
  ],
};