import {
  component$,
  Slot,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import style from "./paper.css?inline";

interface Props {
  type: "dark" | "light";
  clickable?: boolean;
}
export default component$(({ type, clickable }: Props) => {
  const isMouseDown = useSignal(false);
  useStylesScoped$(style);

  const mouseDownClass = isMouseDown.value ? "mouse-down" : "";

  return clickable ? (
    <div
      class={`${type} clickable ${mouseDownClass}`}
      onMouseDown$={() => {
        isMouseDown.value = true;
      }}
      document:onMouseUp$={() => {
        isMouseDown.value = false;
      }}
    >
      <Slot></Slot>
    </div>
  ) : (
    <div class={`${type} `}>
      <Slot></Slot>
    </div>
  );
});
