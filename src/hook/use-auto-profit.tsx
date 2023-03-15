import { useContext, useVisibleTask$ } from "@builder.io/qwik";
import { DateTickerContext } from "~/store/date-ticker/date-ticker-provider";
import { usePurchaseItemList } from "./use-purchase-items";
import { WalletContext } from "~/store/wallet/wallet-provider";

export const useAutoProfit = () => {
  const ticker = useContext(DateTickerContext);
  const wallet = useContext(WalletContext);

  const itemList = usePurchaseItemList();

  useVisibleTask$(({ track }) => {
    track(() => {
      ticker.elapsedDate;
    });

    const profit = itemList.items.reduce((acc, item) => {
      if (item.name === "flipMachine") return acc;
      if (item.name === "etfStock" || item.name === "etfBonds")
        return acc + item.profit;
      return acc + item.profit * item.amount;
    }, 0);

    wallet.amount += profit;
  });
};
