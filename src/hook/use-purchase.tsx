import { $, useContext } from "@builder.io/qwik";
import { WalletContext } from "~/provider/wallet/wallet-provider";
import { usePurchaseItemList } from "./use-purchase-items";
interface PurchaseArgs {
  name: string;
  buyAmount: number;
  price: number;
}
export const usePurchase = () => {
  const wallet = useContext(WalletContext);
  // const purchased = useContext(PurchasedItemsContext);

  const list = usePurchaseItemList();

  const purchase = $((args: PurchaseArgs) => {
    const target = list.find((i) => i.name === args.name);
    if (!target) {
      return;
    }
    if (target.amount + args.buyAmount > target.maxAmount) {
      return;
    }
    if (wallet.amount < args.price * args.buyAmount) {
      return;
    }

    wallet.amount -= args.price * args.buyAmount;
  });

  return purchase;
};
