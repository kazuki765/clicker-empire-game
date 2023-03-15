import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";

interface UserState {
  user: {
    initialAge: number;
    name: string;
  };
}
export const UserContext = createContextId<UserState>("user-context");

export default component$(() => {
  const state = useStore<UserState>({
    user: {
      initialAge: 20,
      name: "",
    },
  });

  useContextProvider(UserContext, state);
  return <Slot></Slot>;
});
