import { useReset } from "./use-reset";
import { useSave } from "./use-save";
import { useLoadData } from "./use-load-data";

export const useSaveData = () => {
  const load = useLoadData();

  const save = useSave();

  const reset = useReset();

  return [load, save, reset] as const;
};
