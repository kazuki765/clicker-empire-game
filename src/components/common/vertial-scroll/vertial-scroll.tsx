import { Slot, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const scrollPosition = useSignal(0);

  return (
    <div
      class="outer"
      onScroll$={(e) => {
        scrollPosition.value = e.currentTarget.scrollTop;
      }}
    >
      <div class="inner">
        <Slot></Slot>
      </div>
    </div>
  );
});
