import { component$, Slot } from "@builder.io/qwik";

interface Props {
  onClick: Function;
}
export default component$((props: Props) => {
  return (
    <button onClick$={props.onClick()}>
      <Slot />
    </button>
  );
});
