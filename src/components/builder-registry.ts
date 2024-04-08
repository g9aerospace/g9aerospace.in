import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Counter from "./counter/counter";
import MetaTags from "./metatags/metatags";
/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Counter,
    name: "Counter",
    inputs: [
      {
        name: "initialValue",
        type: "number",
      },
    ],
  },
  {
    component: MetaTags,
    name: "MetaTags",
    inputs: [
      { name: 'Title', type: 'text' },
      { name: 'Description', type: 'text' },
      { name: 'Color', type: 'text' },
      { name: 'Author', type: 'text' },
      { name: 'Keywords', type: 'text' },
      { name: 'Open Graph Title', type: 'text' },
      { name: 'Open Graph Description', type: 'text' },
      { name: 'Open Graph Image', type: 'url' },
      { name: 'Twitter Title', type: 'text' },
      { name: 'Twitter Description', type: 'text' },
      { name: 'Twitter Image', type: 'url' },
      { name: 'Twitter Card Type', type: 'text' },
    ],
  }
];
