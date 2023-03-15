import { useContext, $ } from "@builder.io/qwik";
import { UserContext } from "~/store/user/user-provider";

export const useUserName = () => {
  const userContext = useContext(UserContext);

  const setUserName = $((name: string) => {
    userContext.user.name = name;
  });
  return [userContext.user.name, setUserName] as const;
};
