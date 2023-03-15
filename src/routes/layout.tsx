import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import style from "./layout.css?inline";
import UserProvider from "~/store/user/user-provider";
import DateTickerProvider from "~/store/date-ticker/date-ticker-provider";
import FlapCountProvider from "~/store/flap-count/flap-count-provider";
import PurchasedItemsProvider from "~/store/purchased-items/purchased-items-provider";
import WalletProvider from "~/store/wallet/wallet-provider";

export default component$(() => {
  useStylesScoped$(style);
  return (
    <main>
      <header></header>
      <section>
        <div class="container">
          <DateTickerProvider>
            <WalletProvider>
              <PurchasedItemsProvider>
                <FlapCountProvider>
                  <UserProvider>
                    <Slot />
                  </UserProvider>
                </FlapCountProvider>
              </PurchasedItemsProvider>
            </WalletProvider>
          </DateTickerProvider>
        </div>
      </section>
      <footer></footer>
    </main>
  );
});
