import { Slot, component$ } from "@builder.io/qwik";
import Button from "../button/button";
import type { ButtonProps } from "../button/button";

interface Props extends ButtonProps {
  icon: "save" | "reset";
  position: "left" | "right";
}
export default component$(
  ({ type, color, onClick$, size, position }: Props) => {
    return (
      <Button type={type} color={color} onClick$={onClick$} size={size}>
        {position === "left" && <span></span>}
        <Slot></Slot>
        {position === "right" && <span></span>}
      </Button>
    );
  }
);
