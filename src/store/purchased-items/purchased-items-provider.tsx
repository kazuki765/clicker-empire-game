import {
  Slot,
  component$,
  createContextId,
  useStore,
  useContextProvider,
} from "@builder.io/qwik";

export const PurchasedItemsContext = createContextId<PurchasedItemsState>(
  "purchased-items-provider"
);

export interface PurchasedItemsState {
  flipMachine: number;
  etfStock: number;
  etfBonds: number;
  lemonadeStand: number;
  iceCreamTruck: number;
  house: number;
  townHouse: number;
  mansion: number;
  industrialSpace: number;
  hotelSkyscraper: number;
  bulletSpeedSkyRailway: number;
}

export default component$(() => {
  const state = useStore<PurchasedItemsState>({
    flipMachine: 0,
    etfStock: 0,
    etfBonds: 0,
    lemonadeStand: 0,
    iceCreamTruck: 0,
    house: 0,
    townHouse: 0,
    mansion: 0,
    industrialSpace: 0,
    hotelSkyscraper: 0,
    bulletSpeedSkyRailway: 0,
  });

  useContextProvider(PurchasedItemsContext, state);

  return <Slot />;
});
