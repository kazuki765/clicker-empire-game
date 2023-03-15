import { $, useContext } from "@builder.io/qwik";
import { PurchasedItemsContext } from "~/store/purchased-items/purchased-items-provider";
import { WalletContext } from "~/store/wallet/wallet-provider";
import { usePurchaseItemList } from "./use-purchase-items";
import type { PurchasedItemsState } from "../store/purchased-items/purchased-items-provider";
interface PurchaseArgs {
  name: string;
  buyAmount: number;
  price: number;
}
export const usePurchase = () => {
  const wallet = useContext(WalletContext);
  const purchased = useContext(PurchasedItemsContext);

  const list = usePurchaseItemList();

  const purchase = $((args: PurchaseArgs) => {
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

    purchased[args.name as keyof PurchasedItemsState] += args.buyAmount;

    wallet.amount -= args.price * args.buyAmount;
  });

  return purchase;
};
