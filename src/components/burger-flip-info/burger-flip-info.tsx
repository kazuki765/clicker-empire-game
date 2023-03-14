import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./burger-flip-info.css?inline";

interface Props {
  flipPrice: number;
  flapCount: number;
}
export default component$(({ flipPrice, flapCount }: Props) => {
  useStylesScoped$(style);

  return (
    <div>
      <h3>{flapCount} Burgers </h3>
      <p>one click: ¥ {flipPrice}</p>
    </div>
  );
});
