import { component$, useStylesScoped$ } from "@builder.io/qwik";
import IconButton from "~/components/common/icon-button/icon-button";
import style from "./button-group-with-save-and-reset.css?inline";
import { useSaveData } from "~/hook/save-data/use-save-data";

export default component$(() => {
  useStylesScoped$(style);

  const [, save, reset] = useSaveData();

  return (
    <div class="container">
      <IconButton
        type="button"
        size="large"
        onClick$={() => {
          reset();
        }}
        color="gray"
        icon="reset"
        position="left"
      >
        リセット
      </IconButton>
      <IconButton
        type="button"
        size="large"
        onClick$={() => {
          save();
        }}
        color="gray"
        icon="save"
        position="left"
      >
        保存
      </IconButton>
    </div>
  );
});
