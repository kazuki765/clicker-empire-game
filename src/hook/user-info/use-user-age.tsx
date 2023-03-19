import { useContext, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useElapsedYear } from "../timer/use-elapsed-year";
import { UserContext } from "~/store/user/user-provider";
export const useUserAge = () => {
  const elapsedYear = useElapsedYear();
  const userContext = useContext(UserContext);

  const userAge = useSignal(userContext.user.initialAge ?? 20);

  useVisibleTask$(({ track }) => {
    track(() => {
      elapsedYear.value;
    });
    userAge.value = elapsedYear.value + userContext.user.initialAge;
  });

  return [userAge] as const;
};
