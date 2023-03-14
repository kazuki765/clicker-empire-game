import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./index.css?inline";
import LoginForm from "~/container/login-form/login-form";

export default component$(() => {
  useStylesScoped$(style);

  return (
    <div class="container">
      <LoginForm></LoginForm>
    </div>
  );
});
