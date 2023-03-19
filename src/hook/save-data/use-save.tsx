import { $, useContext } from "@builder.io/qwik";
import { DateTickerContext } from "~/store/date-ticker/date-ticker-provider";
import type { TickerState } from "~/store/date-ticker/date-ticker-provider";
import { PurchasedItemsContext } from "~/store/purchased-items/purchased-items-provider";
import type { PurchasedItemsState } from "~/store/purchased-items/purchased-items-provider";
import { UserContext } from "~/store/user/user-provider";
import type { UserState } from "~/store/user/user-provider";
import { WalletContext } from "~/store/wallet/wallet-provider";
import type { WalletState } from "~/store/wallet/wallet-provider";
import { FlapCountContext } from "../../store/flap-count/flap-count-provider";
import type { FlapCountState } from "~/store/flap-count/flap-count-provider";

export interface SaveData {
  user: UserState;
  wallet: WalletState;
  purchased: PurchasedItemsState;
  ticker: TickerState;
  flapCount: FlapCountState;
}
export const useSave = () => {
  const user = useContext(UserContext);
  const wallet = useContext(WalletContext);
  const purchased = useContext(PurchasedItemsContext);
  const ticker = useContext(DateTickerContext);
  const flapCount = useContext(FlapCountContext);
  return $(() => {
    localStorage.setItem(
      "user-data-" + user.user.name,
      JSON.stringify({
        user: user,
        wallet: wallet,
        purchased: purchased,
        ticker: ticker,
        flapCount: flapCount,
      })
    );
  });
};
