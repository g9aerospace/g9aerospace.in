import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

// Import the component$ function from the Qwik library
import { component$ } from "@builder.io/qwik";

// Import the g9aerospace icon
import g9aerospace from "../../media/g9aerospace.png";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  // The Open Graph image
  const openGraphImage = head.meta.find((m) => m.property === "og:image")?.content;
  const imageSource = openGraphImage || g9aerospace;

  return (
    <>
      <title>G9 Aerospace - {head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2e7bff" /> 
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {/* Open Graph tags */}
      <meta property="og:title" content={`G9 Aerospace - ${head.title}`} />
      <meta property="og:description" content={head.meta.find((m) => m.name === "description")?.content} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={loc.url.href} />
      <meta property="og:image" content={imageSource} />

      {/* Loop over existing meta tags */}
      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {/* Loop over existing link tags */}
      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {/* Loop over existing style tags */}
      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {/* Loop over existing script tags */}
      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});
