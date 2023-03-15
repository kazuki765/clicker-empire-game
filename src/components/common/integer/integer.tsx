import { component$ } from "@builder.io/qwik";
interface Props {
  num: number;
}

export default component$(({ num }: Props) => {
  return <>{Math.floor(num).toString()}</>;
});
