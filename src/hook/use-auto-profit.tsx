import { useContext, useVisibleTask$ } from "@builder.io/qwik";
import { DateTickerContext } from "~/provider/date-ticker/date-ticker-provider";
// import { PurchasedItemsContext } from "~/provider/purchased-items/purchased-items-provider";
// import { WalletContext } from "~/provider/wallet/wallet-provider";

export const useAutoProfit = () => {
  const ticker = useContext(DateTickerContext);
  // const wallet = useContext(WalletContext);
  // const purchased = useContext(PurchasedItemsContext);

  useVisibleTask$(({ track }) => {
    track(() => {
      ticker.elapsedDate;
    });
  });
};
