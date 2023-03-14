import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Paper from "~/components/common/paper/paper";

import style from "./wallet-display.css?inline";

interface Props {
  amount: number;
}
export default component$(({ amount }: Props) => {
  useStylesScoped$(style);
  return (
    <Paper type="light">
      <div class="content">{amount} 円</div>
    </Paper>
  );
});
