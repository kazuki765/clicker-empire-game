import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import style from "./paper.css?inline";

interface Props {
  type: "dark" | "light";
}
export default component$(({ type }: Props) => {
  useStylesScoped$(style);

  return (
    <div class={`${type}`}>
      <Slot></Slot>
    </div>
  );
});
