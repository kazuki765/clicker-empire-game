import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { PropFunction, QwikChangeEvent } from "@builder.io/qwik";
import style from "./input-text.css?inline";

interface Props {
  name: string;
  value: string;
  onChange$: PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>;
}
export default component$(({ name, value, onChange$ }: Props) => {
  useStylesScoped$(style);
  return <input type="text" name={name} value={value} onChange$={onChange$} />;
});
