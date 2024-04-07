import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import {
  fetchOneEntry,
  Content,
  getBuilderSearchParams,
} from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "../../components/builder-registry";

export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY;
export const MODEL = 'page';

// This page is a catch-all for all routes that don't have a pre-defined route.
// Using a catch-all route allows you to dynamically create new pages in Builder.

// Use the `useBuilderContent` route loader to get your content from Builder.
// `routeLoader$()` takes an async function to fetch content
// from Builder with using `fetchOneEntry()`.
export const useBuilderContent = routeLoader$(async ({ url, error }) => {
  const isPreviewing = url.searchParams.has("builder.preview");

  // Fetch Builder.io Visual CMS content using the Qwik SDK.
  // The public API key is set in the .env file at the root
  // https://www.builder.io/c/docs/using-your-api-key
  
  const builderContent = await fetchOneEntry({
    model: MODEL,
    apiKey: BUILDER_PUBLIC_API_KEY,
    apiVersion: "v3",
    options: {
      ...getBuilderSearchParams(url.searchParams),
      cachebust: true,
    },
    userAttributes: {
      urlPath: url.pathname || "/",
    },
  });

  // If there's no content, throw a 404.
  // You can use your own 404 component here
  if (!builderContent && !isPreviewing) {
    throw error(404, "Page not found");
  }

  // return content fetched from Builder, which is JSON
  return builderContent;
});

export default component$(() => {
  const builderContent = useBuilderContent();

  // Content component uses the `content` prop to render
  // the page, specified by the API Key, at the current URL path.
  return (
    <div>
      <Content
        model={MODEL}
        content={builderContent.value}
        apiKey={BUILDER_PUBLIC_API_KEY}
        customComponents={CUSTOM_COMPONENTS}
        apiVersion="v3"
      />
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const builderContent = resolveValue(useBuilderContent);
  return {
    title: builderContent?.data?.title,
  };
};
