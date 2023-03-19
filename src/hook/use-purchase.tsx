import { $, useContext } from "@builder.io/qwik";
import { PurchasedItemsContext } from "~/store/purchased-items/purchased-items-provider";
import { WalletContext } from "~/store/wallet/wallet-provider";
import { usePurchaseItemList } from "./use-purchase-items";
import type { PurchasedItemsState } from "../store/purchased-items/purchased-items-provider";
import { useEtfStockPrice } from "./use-etf-stock-price";
interface PurchaseArgs {
  name: string;
  buyAmount: number;
  price: number;
}
export const usePurchase = () => {
  const wallet = useContext(WalletContext);
  const purchased = useContext(PurchasedItemsContext);

  const list = usePurchaseItemList();

  const calcEtfPrice = useEtfStockPrice();

  const purchase = $(async (args: PurchaseArgs) => {
    const target = list.items.find((i) => i.name === args.name);
    if (!target) {
      console.warn("");
      return;
    }
    if (target.amount + args.buyAmount > target.maxAmount) {
      return;
    }
    if (wallet.amount < args.price * args.buyAmount) {
      return;
    }
    if (target.name === "etfStock") {
      const price = await calcEtfPrice(target.amount, args.buyAmount);
      if (wallet.amount < price) {
        return;
      }
    }

    purchased[args.name as keyof PurchasedItemsState] += args.buyAmount;

    wallet.amount -= args.price * args.buyAmount;
  });

  return purchase;
};
