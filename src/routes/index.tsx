import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import style from "./index.css?inline";
import LoginForm from "~/container/login-form/login-form";
import { useTimer } from "~/hook/timer/use-timer";

export default component$(() => {
  useStylesScoped$(style);

  const [, stop] = useTimer();

  useVisibleTask$(() => {
    stop();
  });

  return (
    <div class="container">
      <LoginForm></LoginForm>
    </div>
  );
});
