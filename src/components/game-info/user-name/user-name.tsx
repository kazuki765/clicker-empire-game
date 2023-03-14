import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Paper from "~/components/common/paper/paper";

import style from "./user-name.css?inline";

interface Props {
  name: string;
}
export default component$(({ name }: Props) => {
  useStylesScoped$(style);
  return (
    <Paper type="light">
      <div class="content">{name}</div>
    </Paper>
  );
});
