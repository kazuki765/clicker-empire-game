import { $, useContext } from "@builder.io/qwik";
import { useElapsedYear } from "./use-elapsed-year";
import { UserContext } from "~/provider/user/user-provider";
export const useUserAge = () => {
  const elapsedYear = useElapsedYear();
  const userContext = useContext(UserContext);

  const setAge = $((age: number) => {
    userContext.user.age = age;
  });

  return [elapsedYear.value + userContext.user.age, setAge] as const;
};
