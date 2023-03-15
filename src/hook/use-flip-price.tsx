import { useContext, useVisibleTask$, useSignal } from "@builder.io/qwik";
import { PurchasedItemsContext } from "~/store/purchased-items/purchased-items-provider";

export const useFlipPrice = () => {
  const flipPrice = useSignal(25);
  const purchasedItems = useContext(PurchasedItemsContext);
  useVisibleTask$(({ track }) => {
    track(() => {
      purchasedItems.flipMachine;
    });
    flipPrice.value = 25 * (1 + purchasedItems.flipMachine);
  });

  return flipPrice;
};
