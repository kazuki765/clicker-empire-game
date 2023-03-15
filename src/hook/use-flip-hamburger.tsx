import { useContext, $ } from "@builder.io/qwik";
import { WalletContext } from "../store/wallet/wallet-provider";
import { useFlipPrice } from "./use-flip-price";
import { FlapCountContext } from "~/store/flap-count/flap-count-provider";

export const useFlipHamburger = () => {
  const walletContext = useContext(WalletContext);
  const flapCountContext = useContext(FlapCountContext);
  const flipPrice = useFlipPrice();

  const flip = $(() => {
    walletContext.amount += flipPrice.value;
    flapCountContext.count++;
  });

  return flip;
};
