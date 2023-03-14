import { component$, useStylesScoped$, useContext } from "@builder.io/qwik";
import Paper from "~/components/common/paper/paper";

import style from "./burger-fliper.css?inline";
import { useFlipHamburger } from "~/hook/use-flip-hamburger";
import BurgerFlipInfo from "~/components/burger-flip-info/burger-flip-info";
import { useFlipPrice } from "~/hook/use-flip-price";
import { FlapCountContext } from "~/provider/flap-count/flap-count-provider";
export default component$(() => {
  useStylesScoped$(style);

  const flip = useFlipHamburger();
  const flipPrice = useFlipPrice();
  const flapCount = useContext(FlapCountContext);

  return (
    <div class="container">
      <Paper type="light">
        <BurgerFlipInfo
          flipPrice={flipPrice}
          flapCount={flapCount.count}
        ></BurgerFlipInfo>
      </Paper>
      <figure>
        <img
          src="/hamburger.png"
          onClick$={() => {
            flip();
          }}
        ></img>
      </figure>
    </div>
  );
});
