import Card from "~/components/common/card/card";
import { useSignal, useStylesScoped$ } from "@builder.io/qwik";
import style from "./login-form.css?inline";
import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import Button from "~/components/common/button/button";
import { useUserName } from "../../hook/user-info/use-user-name";
import { useLoadData } from "~/hook/save-data/use-load-data";
import { useCheckData } from "../../hook/save-data/use-check-data";

export default component$(() => {
  useStylesScoped$(style);
  const userName = useSignal("");
  const dataExists = useSignal(false);

  const [, setName] = useUserName();
  const load = useLoadData();
  const checkData = useCheckData();

  const navigate = useNavigate();
  return (
    <Card>
      <form
        preventdefault:submit={true}
        onSubmit$={() => {
          if (!userName.value) return;
          load(userName.value).then(() => {
            setName(userName.value).then(() => {
              navigate("/game");
            });
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
            onChange$={(e) => {
              userName.value = e.target.value;
            }}
            onInput$={(e) => {
              const value = (e.target as HTMLInputElement).value;
              checkData(value).then((exists) => {
                dataExists.value = exists;
              });
            }}
          />
        </div>

        <div class="button-wrapper">
          <Button
            type="submit"
            size="medium"
            color="primary"
            disabled={dataExists.value === false}
            onClick$={() => {}}
          >
            続きから
          </Button>
          <Button
            type="button"
            size="medium"
            color="secondary"
            onClick$={() => {
              if (!userName.value) return;
              setName(userName.value).then(() => {
                navigate("/game");
              });
            }}
          >
            最初から
          </Button>
        </div>
      </form>
    </Card>
  );
});
