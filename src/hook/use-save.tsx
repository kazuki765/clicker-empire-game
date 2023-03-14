import { useContext, $ } from "@builder.io/qwik";
import { UserContext } from "~/provider/user/user-provider";

export const useSave = () => {
  const userContext = useContext(UserContext);

  return $(() => {
    localStorage.setItem(
      "user-data-" + userContext.user.name,
      JSON.stringify(userContext.user)
    );
  });
};
