import { useContext, $ } from "@builder.io/qwik";
import { UserContext } from "~/store/user/user-provider";

export const useSaveData = () => {
  const userContext = useContext(UserContext);

  const load = $((name: string) => {
    return localStorage.getItem("user-data-" + name);
  });

  const save = $(() => {
    localStorage.setItem(
      "user-data-" + userContext.user.name,
      JSON.stringify(userContext.user)
    );
  });

  const reset = $(() => {
    localStorage.removeItem("user-data-" + userContext.user.name);
  });
  return [load, save, reset] as const;
};
