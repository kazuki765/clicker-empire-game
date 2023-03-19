import { $, useContext } from "@builder.io/qwik";
import { DateTickerContext } from "~/store/date-ticker/date-ticker-provider";
import { WalletContext } from "../../store/wallet/wallet-provider";
import { PurchasedItemsContext } from "~/store/purchased-items/purchased-items-provider";
import type { PurchasedItemsState } from "~/store/purchased-items/purchased-items-provider";
import { FlapCountContext } from "../../store/flap-count/flap-count-provider";

export const useReset = () => {
  const ticker = useContext(DateTickerContext);
  const wallet = useContext(WalletContext);
  const purchasedItem = useContext(PurchasedItemsContext);
  const flapCount = useContext(FlapCountContext);

  return $(() => {
    ticker.elapsedDate = 0;
    wallet.amount = 50000;
    Object.keys(purchasedItem).forEach((key) => {
      purchasedItem[key as keyof PurchasedItemsState] = 0;
    });
    flapCount.count = 0;
  });
};
