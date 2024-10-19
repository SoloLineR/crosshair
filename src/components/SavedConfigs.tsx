import { CrosshairSettingsObj } from "@/types";
import { Button } from "./ui/button";
import { v4 as uuidv4 } from "uuid";
export default function SavedConfigs({
  crosshairSettingsState,
}: {
  crosshairSettingsState: CrosshairSettingsObj;
}) {
  function handleSave() {
    const items: (CrosshairSettingsObj & { id: string })[] =
      JSON.parse(localStorage.getItem("savedConfigs")!) || [];

    const newConfig = { id: uuidv4(), ...crosshairSettingsState };

    items.push(newConfig);

    localStorage.setItem("savedConfigs", JSON.stringify(items));
  }
  return (
    <div className=" flex justify-between">
      <Button onClick={handleSave}>save</Button>
      <Button>Prewiev crosshair</Button>
    </div>
  );
}
