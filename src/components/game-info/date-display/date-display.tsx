import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Paper from "~/components/common/paper/paper";

import style from "./date-display.css?inline";

interface Props {
  elapsedDate: number;
}
export default component$(({ elapsedDate }: Props) => {
  useStylesScoped$(style);
  return (
    <Paper type="light">
      <div class="content">{elapsedDate} days</div>
    </Paper>
  );
});
