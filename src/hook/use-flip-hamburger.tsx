import { useContext, $ } from "@builder.io/qwik";
import { WalletContext } from "../provider/wallet/wallet-provider";
import { useFlipPrice } from "./use-flip-price";
import { FlapCountContext } from "~/provider/flap-count/flap-count-provider";

export const useFlipHamburger = () => {
  const walletContext = useContext(WalletContext);
  const flapCountContext = useContext(FlapCountContext);
  const flipPrice = useFlipPrice();

  const flip = $(() => {
    walletContext.amount += flipPrice;
    flapCountContext.count++;
  });

  return flip;
};
