import Card from "~/components/common/card/card";
import { useSignal, useStylesScoped$ } from "@builder.io/qwik";
import style from "./login-form.css?inline";
import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import Button from "~/components/common/button/button";
import { useUserName } from "../../hook/use-user-name";

export default component$(() => {
  useStylesScoped$(style);
  const userName = useSignal("");

  const [, setName] = useUserName();

  const navigate = useNavigate();
  return (
    <Card>
      <form
        preventdefault:submit={true}
        onSubmit$={() => {
          if (!userName.value) return;
          setName(userName.value);
          setTimeout(() => {
            navigate("/game");
          });
        }}
      >
        <h2>Click Empire Game</h2>
        <p></p>

        <div>
          <label for="name">名前: </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange$={(e) => (userName.value = e.target.value)}
          />
        </div>

        <div>
          <Button
            type="submit"
            size="medium"
            color="primary"
            onClick$={() => {}}
          >
            ゲーム開始
          </Button>
        </div>
      </form>
    </Card>
  );
});
