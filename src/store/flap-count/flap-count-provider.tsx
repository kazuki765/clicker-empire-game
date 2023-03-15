import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";

interface FlapCountState {
  count: number;
}
export const FlapCountContext =
  createContextId<FlapCountState>("FlapCountContext");
export default component$(() => {
  const state = useStore<FlapCountState>({
    count: 0,
  });

  useContextProvider(FlapCountContext, state);

  return <Slot></Slot>;
});
