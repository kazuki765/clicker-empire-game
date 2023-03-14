import { useContext, useStore, useVisibleTask$ } from "@builder.io/qwik";
import type { PurchaseableItemType } from "../components/purchase-item/purchaseable-item";
import { PurchasedItemsContext } from "../provider/purchased-items/purchased-items-provider";
import type { PurchasedItemsState } from "../provider/purchased-items/purchased-items-provider";
import { UserCapacity } from "~/constants/user-capacity";

interface State {
  items: PurchaseableItemType[];
}
export const usePurchaseItemList = () => {
  const state = useStore<State>({ items: [] });
  const purchasedItemContext = useContext(PurchasedItemsContext);

  useVisibleTask$(({ track }) => {
    track(() => {
      purchasedItemContext;
    });

    state.items = createPurchaseItemList(purchasedItemContext);
  });

  return state.items;
};

function createPurchaseItemList(
  counts: PurchasedItemsState
): PurchaseableItemType[] {
  return [
    {
      name: "Flip Machine",
      amount: counts.flipMachine,
      maxAmount: UserCapacity.FlipMachine,
      price: 15000,
      timing: "click",
      profit: (1 + counts.flipMachine) * 25,
    },
    {
      name: "ETF Stock",
      amount: counts.etfStock,
      maxAmount: UserCapacity.ETFStock,
      price: counts.etfStock === 0 ? 300000 : 300000 * 1.1 ** counts.etfStock,
      timing: "day",
      profit: ((300000 * (1.1 ** counts.etfStock - 1.1)) / (1.1 - 1)) * 0.001,
    },
    {
      name: "ETF Bonds",
      amount: counts.etfBonds,
      maxAmount: UserCapacity.ETFBonds,
      price: 300000,
      timing: "day",
      profit:
        ((300000 * (1.07 ** counts.etfBonds - 1.07)) / (1.07 - 1)) * 0.0007,
    },
    {
      name: "Lemonade Stand",
      amount: counts.lemonadeStand,
      maxAmount: UserCapacity.LemonadeStand,
      price: 30000,
      timing: "day",
      profit: 30,
    },
    {
      name: "Ice Cream Truck",
      amount: counts.iceCreamTruck,
      maxAmount: UserCapacity.IceCreamTruck,
      price: 100000,
      timing: "day",
      profit: 120,
    },
    {
      name: "House",
      amount: counts.house,
      maxAmount: UserCapacity.House,
      price: 20000000,
      timing: "day",
      profit: 32000,
    },
    {
      name: "TownHouse",
      amount: counts.townHouse,
      maxAmount: UserCapacity.TownHouse,
      price: 40000000,
      timing: "day",
      profit: 64000,
    },
    {
      name: "Mansion",
      amount: counts.mansion,
      maxAmount: UserCapacity.Mansion,
      price: 250000000,
      timing: "day",
      profit: 500000,
    },
    {
      name: "Industrial Space",
      amount: counts.industrialSpace,
      maxAmount: UserCapacity.IndustrialSpace,
      price: 1000000000,
      timing: "day",
      profit: 2200000,
    },
    {
      name: "Hotel Skyscraper",
      amount: counts.hotelSkyscraper,
      maxAmount: UserCapacity.HotelSkyscraper,
      price: 10000000000,
      timing: "day",
      profit: 25000000,
    },
    {
      name: "Bullet-Speed Sky Railway",
      amount: counts.bulletSpeedSkyRailway,
      maxAmount: UserCapacity.BulletSpeedSkyRailway,
      price: 10000000000000,
      timing: "day",
      profit: 30000000000,
    },
  ];
}
