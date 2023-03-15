import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import Paper from "~/components/common/paper/paper";
import style from "./index.css?inline";
import UserInformation from "~/container/information-panel/information-panel";
import BurgerFliper from "~/container/burger-fliper/burger-fliper";
import ButtonGroupWithSaveAndReset from "~/container/button-group-with-save-and-reset/button-group-with-save-and-reset";
import PurchaseableList from "~/container/purchaseable-list/purchaseable-list";
import { useTimer } from "../../hook/use-timer";
import { useAutoProfit } from "../../hook/use-auto-profit";

export default component$(() => {
  useStylesScoped$(style);

  const [start] = useTimer();

  useAutoProfit();

  useVisibleTask$(() => {
    start();
  });

  return (
    <div class="flex">
      <div class="left">
        <Paper type="dark">
          <BurgerFliper></BurgerFliper>
        </Paper>
      </div>
      <div class="right">
        <div>
          <Paper type="dark">
            <UserInformation />
          </Paper>
        </div>
        <div class="wrapper">
          <Paper type="dark">
            <div class="purchase-list">
              <PurchaseableList></PurchaseableList>
            </div>
          </Paper>
        </div>
        <div>
          <ButtonGroupWithSaveAndReset></ButtonGroupWithSaveAndReset>
        </div>
      </div>
    </div>
  );
});
