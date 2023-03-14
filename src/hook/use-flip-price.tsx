import { useContext } from "@builder.io/qwik";
import { PurchasedItemsContext } from "~/provider/purchased-items/purchased-items-provider";

export const useFlipPrice = () => {
  const purchasedItems = useContext(PurchasedItemsContext);

  return 25 * (1 + purchasedItems.flipMachine);
};
