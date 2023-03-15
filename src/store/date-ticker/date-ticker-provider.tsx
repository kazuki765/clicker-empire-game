import { Slot, useContextProvider, useStore } from "@builder.io/qwik";
import { component$, useVisibleTask$, createContextId } from "@builder.io/qwik";

interface TickerState {
  elapsedDate: number;
  running: boolean;
}
export const DateTickerContext = createContextId<TickerState>(
  "date-ticker-context"
);

export default component$(() => {
  const state = useStore<TickerState>({
    elapsedDate: 0,
    running: false,
  });

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      if (state.running) {
        state.elapsedDate++;
      }
    }, 1000);

    return () => clearInterval(interval);
  });
  useContextProvider(DateTickerContext, state);
  return (
    <>
      <Slot></Slot>
    </>
  );
});
