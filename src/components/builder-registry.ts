import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Counter from "./counter/counter";
import Input from "./input/input";

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
    component: Input,
    name: "Input",
    inputs: [
      {
        name: "initialValue",
        type: "number",
      },
    ],
  },
];
