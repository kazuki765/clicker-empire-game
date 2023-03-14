import { component$, Slot } from "@builder.io/qwik";
import GameProvider from "~/provider/game/game-provider";

export default component$(() => {
  return (
    <GameProvider>
      <Slot />
    </GameProvider>
  );
});
