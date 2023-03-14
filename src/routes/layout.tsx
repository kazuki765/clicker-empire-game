import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import style from "./layout.css?inline";
import UserProvider from "~/provider/user/user-provider";

export default component$(() => {
  useStylesScoped$(style);
  return (
    <main>
      <header></header>
      <section>
        <div class="container">
          <UserProvider>
            <Slot />
          </UserProvider>
        </div>
      </section>
      <footer></footer>
    </main>
  );
});
