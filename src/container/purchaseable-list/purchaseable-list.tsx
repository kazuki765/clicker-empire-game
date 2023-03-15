import { component$, useStylesScoped$ } from "@builder.io/qwik";
import PurchaseableItem from "~/components/purchase-item/purchaseable-item";

import style from "./purchaseable-list.css?inline";
import { usePurchaseItemList } from "~/hook/use-purchase-items";
import { usePurchase } from "../../hook/use-purchase";

export default component$(() => {
  useStylesScoped$(style);

  const items = usePurchaseItemList();
  const purchase = usePurchase();
  return (
    <ul>
      {items.items.map((item) => {
        return (
          <li key={item.name}>
            <PurchaseableItem
              item={item}
              onPurchase={purchase}
            ></PurchaseableItem>
          </li>
        );
      })}
    </ul>
  );
});
