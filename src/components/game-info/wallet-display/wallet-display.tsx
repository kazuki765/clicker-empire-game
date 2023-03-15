import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Paper from "~/components/common/paper/paper";

import style from "./wallet-display.css?inline";
import Integer from "~/components/common/integer/integer";

interface Props {
  amount: number;
}
export default component$(({ amount }: Props) => {
  useStylesScoped$(style);
  return (
    <Paper type="light">
      <div class="content">
        <Integer num={amount}></Integer> 円
      </div>
    </Paper>
  );
});
