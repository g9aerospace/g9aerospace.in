import { $, component$, Slot, useOnDocument, useSignal } from "@builder.io/qwik";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default component$(() => {
  
  const isInitialised = useSignal(false)

useOnDocument('DOMContentLoaded', $(() => {
  isInitialised.value = true
}))

  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
