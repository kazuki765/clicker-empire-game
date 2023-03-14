import { Slot, useContextProvider, useStore } from "@builder.io/qwik";
import { component$, useVisibleTask$, createContextId } from "@builder.io/qwik";

interface TickerState {
  elapsedDate: number;
}
export const DateTickerContext = createContextId<TickerState>(
  "date-ticker-context"
);

export default component$(() => {
  const state = useStore<TickerState>({
    elapsedDate: 0,
  });
  useVisibleTask$(() => {
    const interval = setInterval(() => {
      state.elapsedDate++;
    }, 100);

    return () => clearInterval(interval);
  });
  useContextProvider(DateTickerContext, state);
  return (
    <>
      <Slot></Slot>
    </>
  );
});
