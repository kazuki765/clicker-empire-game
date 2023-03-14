import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";

import type { PropFunction, QwikMouseEvent } from "@builder.io/qwik";
import style from "./button.css?inline";
import { useStore } from "@builder.io/qwik";
export interface ButtonProps {
  type: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "gray";
  size: "small" | "medium" | "large";
  onClick$: PropFunction<(e: QwikMouseEvent) => void>;
}
export default component$(({ type, onClick$, color, size }: ButtonProps) => {
  const state = useStore({ isDown: false });

  useStylesScoped$(style);

  const isDownClass = state.isDown ? "down" : "";

  return (
    <button
      // MEMO: これ神
      document:onMouseUp$={() => {
        state.isDown = false;
      }}
      class={`${color} ${size} ${isDownClass}`}
      type={type}
      onClick$={async (e) => {
        await onClick$(e);
      }}
      onMouseDown$={() => {
        state.isDown = true;
      }}
    >
      <Slot />
    </button>
  );
});
