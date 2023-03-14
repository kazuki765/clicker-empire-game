import { DateTickerContext } from "~/provider/date-ticker/date-ticker-provider";
import { useContext, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const usePause = () => {
  const pausedDate = useSignal(0);
  const dateTicker = useContext(DateTickerContext);
  useVisibleTask$(() => {
    pausedDate.value = dateTicker.elapsedDate;
  });

  return pausedDate;
};
