import { Slot, component$ } from "@builder.io/qwik";
import DateTickerProvider from "~/provider/date-ticker/date-ticker-provider";
import WalletProvider from "~/provider/wallet/wallet-provider";
import PurchasedItemsProvider from "../purchased-items/purchased-items-provider";
import FlapCountProvider from "../flap-count/flap-count-provider";

export default component$(() => {
  return (
    <DateTickerProvider>
      <WalletProvider>
        <PurchasedItemsProvider>
          <FlapCountProvider>
            <Slot></Slot>
          </FlapCountProvider>
        </PurchasedItemsProvider>
      </WalletProvider>
    </DateTickerProvider>
  );
});
