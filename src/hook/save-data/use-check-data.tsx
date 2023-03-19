import { $ } from "@builder.io/qwik";

export const useCheckData = () => {
  return $((name: string) => {
    const data = localStorage.getItem("user-data-" + name);

    return !!data;
  });
};
