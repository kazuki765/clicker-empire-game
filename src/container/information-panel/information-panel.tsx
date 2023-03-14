import {
  component$,
  useStylesScoped$,
  useContext,
  useVisibleTask$,
} from "@builder.io/qwik";
import style from "./information-panel.css?inline";
import AgeDisplay from "~/components/game-info/age-display/age-display";
import UserName from "~/components/game-info/user-name/user-name";
import DateDisplay from "~/components/game-info/date-display/date-display";
import WalletDisplay from "~/components/game-info/wallet-display/wallet-display";
import { WalletContext } from "~/provider/wallet/wallet-provider";
import { useNavigate } from "@builder.io/qwik-city";
import { useUserName } from "../../hook/use-user-name";
import { useUserAge } from "../../hook/use-user-age";
import { useElapsedDate } from "~/hook/use-elapsed-date";

export default component$(() => {
  useStylesScoped$(style);

  const [userName] = useUserName();
  const [userAge] = useUserAge();
  const [elapsedDate] = useElapsedDate();
  const wallet = useContext(WalletContext);

  const navigate = useNavigate();

  useVisibleTask$(() => {
    setTimeout(() => {
      if (!userName) {
        navigate("/");
      }
    });
  });

  return (
    <div class="flex">
      <div>
        <UserName name={userName}></UserName>
      </div>
      <div>
        <AgeDisplay age={userAge}></AgeDisplay>
      </div>
      <div>
        <DateDisplay elapsedDate={elapsedDate}></DateDisplay>
      </div>
      <div>
        <WalletDisplay amount={wallet.amount}></WalletDisplay>
      </div>
    </div>
  );
});
