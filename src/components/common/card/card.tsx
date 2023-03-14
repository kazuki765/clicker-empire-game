import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./card.css?inline";

export default component$(() => {
  useStylesScoped$(style);
  return (
    <div>
      <Slot></Slot>
    </div>
  );
});
