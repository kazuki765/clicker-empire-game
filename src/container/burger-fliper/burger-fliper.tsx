import {
  component$,
  useStylesScoped$,
  useContext,
  useSignal,
} from "@builder.io/qwik";
import Paper from "~/components/common/paper/paper";

import style from "./burger-fliper.css?inline";
import { useFlipHamburger } from "~/hook/use-flip-hamburger";
import BurgerFlipInfo from "~/components/burger-flip-info/burger-flip-info";
import { useFlipPrice } from "~/hook/use-flip-price";
import { FlapCountContext } from "~/store/flap-count/flap-count-provider";
export default component$(() => {
  useStylesScoped$(style);

  const isMouseDown = useSignal(false);

  const flip = useFlipHamburger();
  const flipPrice = useFlipPrice();
  const flapCount = useContext(FlapCountContext);

  return (
    <div class="container">
      <Paper type="light">
        <BurgerFlipInfo
          flipPrice={flipPrice.value}
          flapCount={flapCount.count}
        ></BurgerFlipInfo>
      </Paper>
      <figure>
        <img
          document:onMouseUp$={() => {
            isMouseDown.value = false;
          }}
          onMouseDown$={() => {
            isMouseDown.value = true;
          }}
          class={isMouseDown.value ? "mouse-down" : ""}
          src="/hamburger.png"
          onClick$={() => {
            flip();
          }}
        ></img>
      </figure>
    </div>
  );
});
