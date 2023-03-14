import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Paper from "~/components/common/paper/paper";

import style from "./age-display.css?inline";

interface Props {
  age: number;
}
export default component$(({ age }: Props) => {
  useStylesScoped$(style);
  return (
    <Paper type="light">
      <div class="content">{age} years old</div>
    </Paper>
  );
});
