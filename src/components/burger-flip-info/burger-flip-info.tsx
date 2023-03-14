import { component$ } from "@builder.io/qwik";

interface Props {
  flipPrice: number;
  flapCount: number;
}
export default component$(({ flipPrice, flapCount }: Props) => {
  return (
    <div>
      <h3>{flapCount} Burgers </h3>
      <p>one click: ¥ {flipPrice}</p>
    </div>
  );
});
