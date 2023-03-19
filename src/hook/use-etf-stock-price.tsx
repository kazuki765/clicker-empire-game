import { $ } from "@builder.io/qwik";

export const useEtfStockPrice = () => {
  return $((start: number, end: number) => {
    console.log(start, end);
    let result = 0;
    for (let i = start; i < end; i++) {
      result += 300000 * 1.1 ** i;
    }
    return result;
  });
};
