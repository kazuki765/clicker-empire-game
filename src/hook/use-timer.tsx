import { useContext, $ } from "@builder.io/qwik";
import { DateTickerContext } from "~/store/date-ticker/date-ticker-provider";

export const useTimer = () => {
  const ticker = useContext(DateTickerContext);

  const start = $((elapsedDate?: number) => {
    ticker.running = true;
    if (elapsedDate) ticker.elapsedDate = elapsedDate;
  });

  const stop = $(() => {
    ticker.running = false;
  });

  return [start, stop] as const;
};
