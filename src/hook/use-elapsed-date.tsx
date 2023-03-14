import { useContext } from "@builder.io/qwik";
import { DateTickerContext } from "~/provider/date-ticker/date-ticker-provider";

export const useElapsedDate = () => {
  const ticker = useContext(DateTickerContext);

  return [ticker.elapsedDate];
};
