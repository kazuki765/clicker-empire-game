import {
  PropFunction,
  component$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import Paper from "../common/paper/paper";
import style from "./purchaseable-item.css?inline";
import Button from "../common/button/button";
import Integer from "../common/integer/integer";
import { useEtfStockPrice } from "~/hook/use-etf-stock-price";
export interface PurchaseableItemType {
  name: string;
  displayName: string;
  amount: number;
  maxAmount: number;
  price: number;
  timing: "click" | "day";
  profit: number;
  thumbnailUrl: string;
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
  const etfPrice = useEtfStockPrice();
  useStylesScoped$(style);

  if (isListOpen.value) {
    return (
      <div class="wrapper list" onClick$={() => (isListOpen.value = false)}>
        <Paper type="light" clickable={true}>
          <div class="flex-wrapper">
            <figure>
              <img src={item.thumbnailUrl}></img>
            </figure>
            <div class="info-wrapper">
              <div class="flex">
                <h3>{item.displayName}</h3>
                <h4>{item.amount}</h4>
              </div>
              <div class="flex">
                <h4>
                  ¥ <Integer num={item.price}></Integer>
                </h4>
                <p class="profit">
                  ¥ <Integer num={item.profit}></Integer> / {item.timing}
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
              }).then(() => {
                buyAmount.value = 0;
              });
            }}
          >
            <div class="item-info">
              <div>
                <h2>{item.displayName}</h2>
                <p>Max purchases: {item.maxAmount}</p>
                <p>Price: ¥ {item.price}</p>
                <p>Get: ¥ {item.profit}</p>
              </div>

              <figure>
                <img src={item.thumbnailUrl}></img>
              </figure>
            </div>
            <p>How many would you like to buy?</p>
            <input
              type="number"
              name="amount"
              max={item.maxAmount - item.amount}
              min="0"
              value={buyAmount.value}
              onChange$={(e) => {
                const value = parseInt(e.target.value);
                if (!value) return;
                buyAmount.value = value;
              }}
            />
            <p>
              total: ¥{" "}
              {item.name === "etfStock"
                ? etfPrice(item.amount, item.amount + buyAmount.value)
                : buyAmount.value * item.price}
            </p>

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
