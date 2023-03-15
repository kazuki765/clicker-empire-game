import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./burger-flip-info.css?inline";
import Integer from "../common/integer/integer";

interface Props {
  flipPrice: number;
  flapCount: number;
}
export default component$(({ flipPrice, flapCount }: Props) => {
  useStylesScoped$(style);

  return (
    <div>
      <h3>
        <Integer num={flapCount}></Integer> Burgers
      </h3>
      <p>
        one click: ¥ <Integer num={flipPrice}></Integer>
      </p>
    </div>
  );
});
