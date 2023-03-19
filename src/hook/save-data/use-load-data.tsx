import { $, useContext } from "@builder.io/qwik";
import { SaveData } from "./use-save";
import { UserContext } from "../../store/user/user-provider";
import { DateTickerContext } from "~/store/date-ticker/date-ticker-provider";
import {
  PurchasedItemsContext,
  PurchasedItemsState,
} from "~/store/purchased-items/purchased-items-provider";
import { WalletContext } from "~/store/wallet/wallet-provider";
import { FlapCountContext } from "~/store/flap-count/flap-count-provider";

export const useLoadData = () => {
  const user = useContext(UserContext);
  const wallet = useContext(WalletContext);
  const purchased = useContext(PurchasedItemsContext);
  const ticker = useContext(DateTickerContext);
  const flapCount = useContext(FlapCountContext);

  return $((name: string) => {
    const data = localStorage.getItem("user-data-" + name);
    const parsed: SaveData | null = data ? JSON.parse(data) : null;

    if (parsed == null) return;
    user.user = parsed.user.user;
    wallet.amount = parsed.wallet.amount;
    ticker.elapsedDate = parsed.ticker.elapsedDate;
    ticker.running = parsed.ticker.running;
    Object.keys(purchased).forEach((key) => {
      purchased[key as keyof PurchasedItemsState] =
        parsed.purchased[key as keyof PurchasedItemsState];
    });
    flapCount.count = parsed.flapCount.count;
  });
};
