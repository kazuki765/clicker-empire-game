import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";
import Paper from "../common/paper/paper";
export interface PurchaseableItemType {
  name: string;
  maxAmount: number;
  price: QRL<Function>;
  profitTiming: "onClick" | "onInterval";
  profit: QRL<Function>;
}

interface Props {
  item: PurchaseableItemType;
}

export default component$(({ item }: Props) => {
  // const price = typeof item.price === "function" ? item.price() : item.price;
  return (
    <Paper type="light">
      <div class="flex">
        <figure></figure>
        <div>
          <div class="flex">
            <h4>{item.name}</h4>
            <h4>{item.maxAmount}</h4>
          </div>
          <div class="flex">
            {/* <small>¥{item.price}</small> */}
            <p></p>
          </div>
        </div>
      </div>
    </Paper>
  );
});
