import { useContext, useStore, useVisibleTask$ } from "@builder.io/qwik";
import type { PurchaseableItemType } from "../components/purchase-item/purchaseable-item";
import { PurchasedItemsContext } from "../store/purchased-items/purchased-items-provider";
import type { PurchasedItemsState } from "../store/purchased-items/purchased-items-provider";
import { UserCapacity } from "~/constants/user-capacity";

interface State {
  items: PurchaseableItemType[];
}
export const usePurchaseItemList = () => {
  const state = useStore<State>({ items: [] });
  const purchasedItemContext = useContext(PurchasedItemsContext);

  useVisibleTask$(({ track }) => {
    track(() => {
      purchasedItemContext.flipMachine;
      purchasedItemContext.etfStock;
      purchasedItemContext.etfBonds;
      purchasedItemContext.lemonadeStand;
      purchasedItemContext.iceCreamTruck;
      purchasedItemContext.house;
      purchasedItemContext.townHouse;
      purchasedItemContext.mansion;
      purchasedItemContext.industrialSpace;
      purchasedItemContext.hotelSkyscraper;
      purchasedItemContext.bulletSpeedSkyRailway;
    });

    state.items = createPurchaseItemList(purchasedItemContext);
  });

  return state;
};

function createPurchaseItemList(
  counts: PurchasedItemsState
): PurchaseableItemType[] {
  return [
    {
      name: "flipMachine",
      displayName: "Flip Machine",
      amount: counts.flipMachine,
      maxAmount: UserCapacity.FlipMachine,
      price: 15000,
      timing: "click",
      profit: (1 + counts.flipMachine) * 25,
      thumbnailUrl: "/flip-machine.png",
    },
    {
      name: "etfStock",
      displayName: "ETF Stock",
      amount: counts.etfStock,
      maxAmount: UserCapacity.ETFStock,
      price: counts.etfStock === 0 ? 300000 : 300000 * 1.1 ** counts.etfStock,
      timing: "day",
      profit:
        counts.etfStock &&
        ((300000 * (1.1 ** (counts.etfStock + 1) - 1.1)) / (1.1 - 1)) * 0.001,
      thumbnailUrl: "/kabuken.png",
    },
    {
      name: "etfBonds",
      displayName: "ETF Bonds",
      amount: counts.etfBonds,
      maxAmount: UserCapacity.ETFBonds,
      price: 300000,
      timing: "day",
      profit:
        counts.etfBonds &&
        ((300000 * (1.07 ** (counts.etfBonds + 1) - 1.07)) / (1.07 - 1)) *
          0.0007,
      thumbnailUrl: "/saiken.png",
    },
    {
      name: "lemonadeStand",
      displayName: "Lemonade Stand",
      amount: counts.lemonadeStand,
      maxAmount: UserCapacity.LemonadeStand,
      price: 30000,
      timing: "day",
      profit: 30,
      thumbnailUrl: "/lemonade.png",
    },
    {
      name: "iceCreamTruck",
      displayName: "Ice Cream Truck",
      amount: counts.iceCreamTruck,
      maxAmount: UserCapacity.IceCreamTruck,
      price: 100000,
      timing: "day",
      profit: 120,
      thumbnailUrl: "/ice.png",
    },
    {
      name: "house",
      displayName: "House",
      amount: counts.house,
      maxAmount: UserCapacity.House,
      price: 20000000,
      timing: "day",
      profit: 32000,
      thumbnailUrl: "/house.png",
    },
    {
      name: "townHouse",
      displayName: "Town House",
      amount: counts.townHouse,
      maxAmount: UserCapacity.TownHouse,
      price: 40000000,
      timing: "day",
      profit: 64000,
      thumbnailUrl: "/town-house.png",
    },
    {
      name: "mansion",
      displayName: "Mansion",
      amount: counts.mansion,
      maxAmount: UserCapacity.Mansion,
      price: 250000000,
      timing: "day",
      profit: 500000,
      thumbnailUrl: "/mansion.png",
    },
    {
      name: "industrialSpace",
      displayName: "Industrial Space",
      amount: counts.industrialSpace,
      maxAmount: UserCapacity.IndustrialSpace,
      price: 1000000000,
      timing: "day",
      profit: 2200000,
      thumbnailUrl: "/industrial-space.png",
    },
    {
      name: "hotelSkyscraper",
      displayName: "Hotel Skyscraper",
      amount: counts.hotelSkyscraper,
      maxAmount: UserCapacity.HotelSkyscraper,
      price: 10000000000,
      timing: "day",
      profit: 25000000,
      thumbnailUrl: "/hotel-skyscraper.png",
    },
    {
      name: "bulletSpeedSkyRailway",
      displayName: "Bullet-Speed Sky Railway",
      amount: counts.bulletSpeedSkyRailway,
      maxAmount: UserCapacity.BulletSpeedSkyRailway,
      price: 10000000000000,
      timing: "day",
      profit: 30000000000,
      thumbnailUrl: "/shinkansen.png",
    },
  ];
}
