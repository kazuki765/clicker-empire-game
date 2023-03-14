import { component$, $, useStylesScoped$ } from "@builder.io/qwik";
import PurchaseableItem from "~/components/purchase-item/purchaseable-item";
import type { PurchaseableItemType } from "../../components/purchase-item/purchaseable-item";

import style from "./purchaseable-list.css?inline";

export default component$(() => {
  useStylesScoped$(style);
  return (
    <ul>
      {PURCHASEABLE_ITEMS.map((item) => {
        return (
          <li key={item.name}>
            <PurchaseableItem item={item}></PurchaseableItem>
          </li>
        );
      })}
    </ul>
  );
});

const PURCHASEABLE_ITEMS: PurchaseableItemType[] = [
  {
    name: "Flip Machine",
    maxAmount: 500,
    price: $(() => 15000),
    profitTiming: "onClick",
    profit: $((amount: number) => {
      return (amount + 1) * 25;
    }),
  },
  {
    name: "ETF Stock",
    maxAmount: Infinity,
    price: $((amount: number) => {
      if (amount === 0) return 300000;
      return 300000 * 1.1 ** amount;
    }),
    profitTiming: "onInterval",
    profit: $((amount: number) => {
      // 等比数列の和の公式より
      return (300000 * (1.1 ** (amount + 1) - 1.1)) / (1.1 - 1);
    }),
  },
  {
    name: "ETF Bonds",
    maxAmount: Infinity,
    price: $(() => 300000),
    profitTiming: "onInterval",
    profit: $((amount: number) => {
      // 等比数列の和の公式より
      return (300000 * (1.07 ** (amount + 1) - 1.07)) / (1.07 - 1);
    }),
  },
  {
    name: "Lemonade Stand",
    maxAmount: 1000,
    price: $(() => 30000),
    profitTiming: "onInterval",
    profit: $(() => {
      return 30;
    }),
  },
  {
    name: "Ice Cream Truck",
    maxAmount: 500,
    price: $(() => 100000),
    profitTiming: "onInterval",
    profit: $(() => {
      return 120;
    }),
  },
  {
    name: "House",
    maxAmount: 100,
    price: $(() => 20000000),
    profitTiming: "onInterval",
    profit: $(() => {
      return 32000;
    }),
  },
  {
    name: "TownHouse",
    maxAmount: 100,
    price: $(() => 40000000),
    profitTiming: "onInterval",
    profit: $(() => {
      return 64000;
    }),
  },
  {
    name: "Mansion",
    maxAmount: 20,
    price: $(() => 250000000),
    profitTiming: "onInterval",
    profit: $(() => {
      return 500000;
    }),
  },
  {
    name: "Industrial Space",
    maxAmount: 10,
    price: $(() => 1000000000),
    profitTiming: "onInterval",
    profit: $(() => {
      return 2200000;
    }),
  },
  {
    name: "Hotel Skyscraper",
    maxAmount: 5,
    price: $(() => 10000000000),
    profitTiming: "onInterval",
    profit: $(() => {
      return 25000000;
    }),
  },
  {
    name: "Bullet-Speed Sky Railway",
    maxAmount: 1,
    price: $(() => 10000000000000),
    profitTiming: "onInterval",
    profit: $(() => {
      return 30000000000;
    }),
  },
];
