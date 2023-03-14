import {
  component$,
  createContextId,
  Slot,
  useStore,
  useContextProvider,
} from "@builder.io/qwik";

interface WalletState {
  amount: number;
}
export const WalletContext = createContextId<WalletState>("wallet-context");
export default component$(() => {
  const state = useStore<WalletState>({ amount: 50000 });

  useContextProvider(WalletContext, state);
  return <Slot />;
});
