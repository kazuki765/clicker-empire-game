import { useContext, useVisibleTask$, useSignal } from "@builder.io/qwik";
import { DateTickerContext } from "~/provider/date-ticker/date-ticker-provider";

export const useElapsedYear = () => {
  const elapsedYear = useSignal(0);

  const ticker = useContext(DateTickerContext);

  useVisibleTask$(({ track }) => {
    track(() => {
      ticker.elapsedDate;
    });
    elapsedYear.value = calculateElapsedYear(ticker.elapsedDate);
  });

  return elapsedYear;
};

function calculateElapsedYear(elapsedDate: number) {
  // FIXME: 365 days per year で一旦簡易実装
  return Math.floor(elapsedDate / 365);
}
