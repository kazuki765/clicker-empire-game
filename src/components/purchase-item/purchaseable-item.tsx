import {
  PropFunction,
  component$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import Paper from "../common/paper/paper";
import style from "./purchaseable-item.css?inline";
import Button from "../common/button/button";
export interface PurchaseableItemType {
  name: string;
  amount: number;
  maxAmount: number;
  price: number;
  timing: "click" | "day";
  profit: number;
}

interface Props {
  item: PurchaseableItemType;
  onPurchase: PropFunction<
    (args: { buyAmount: number; price: number; name: string }) => void
  >;
}

export default component$(({ item, onPurchase }: Props) => {
  const isListOpen = useSignal<boolean>(true);
  const buyAmount = useSignal<number>(0);
  useStylesScoped$(style);
  // const price = typeof item.price === "function" ? item.price() : item.price;

  if (isListOpen.value) {
    return (
      <div class="wrapper list" onClick$={() => (isListOpen.value = false)}>
        <Paper type="light">
          <div class="flex-wrapper">
            <figure></figure>
            <div>
              <div class="flex">
                <h3>{item.name}</h3>
                <h4>{item.amount}</h4>
              </div>
              <div class="flex">
                <h4>¥ {Math.floor(item.price)}</h4>
                <p>
                  ¥ {Math.floor(item.profit)} / {item.timing}
                </p>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  } else {
    return (
      <div class="wrapper form">
        <Paper type="light">
          <form
            preventdefault:submit={true}
            onSubmit$={() => {
              onPurchase({
                buyAmount: buyAmount.value,
                price: item.price,
                name: item.name,
              });
            }}
          >
            <div class="item-info">
              <div>
                <h2>{item.name}</h2>
                <p>Max purchases: {item.maxAmount}</p>
                <p>Price: ¥ {item.price}</p>
                <p>Get: ¥ {item.profit}</p>
              </div>

              <figure></figure>
            </div>
            <p>How many would you like to buy?</p>
            <input
              type="number"
              name="amount"
              value={buyAmount.value}
              onChange$={(e) =>
                (buyAmount.value = parseInt(e.target.value) || 0)
              }
            />

            <div class="button-group">
              <Button
                type="button"
                color="secondary"
                size="large"
                onClick$={() => {
                  isListOpen.value = true;
                }}
              >
                Go Back
              </Button>
              <Button
                type="submit"
                color="primary"
                size="large"
                onClick$={() => {
                  isListOpen.value = true;
                }}
              >
                Purchase
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
});
