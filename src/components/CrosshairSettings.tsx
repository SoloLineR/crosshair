import { CrosshairSettingsObj } from "@/types";
import { Slider } from "@/components/ui/slider";
import { Separator } from "./ui/separator";
import { Toggle } from "@/components/ui/toggle";

export default function CrosshairSettings({
  setCrosshairSettingsSate,
  crosshairSettingsState,
}: {
  setCrosshairSettingsSate: (obj: CrosshairSettingsObj) => void;
  crosshairSettingsState: CrosshairSettingsObj;
}) {
  function handleSettingsChange(
    typeOfSettings: keyof CrosshairSettingsObj,
    value: number | boolean
  ) {
    setCrosshairSettingsSate({
      ...crosshairSettingsState,
      [typeOfSettings]: value,
    });
  }

  return (
    <div className=" grid grid-cols-2 gap-4">
      <div className="p-4">
        <p className="text-4xl">Crosshair</p>
        <p className="text-2xl py-4">Gap: {crosshairSettingsState.pipGap}</p>
        <Slider
          defaultValue={[0]}
          max={50}
          min={0}
          step={1}
          onValueChange={(e) => handleSettingsChange("pipGap", e[0])}
        />
        <p className="text-2xl py-4">
          Width: {crosshairSettingsState.pipWidth}
        </p>
        <Slider
          defaultValue={[0]}
          max={50}
          min={2}
          step={1}
          onValueChange={(e) => handleSettingsChange("pipWidth", e[0])}
        />
        <p className="text-2xl py-4">
          Height: {crosshairSettingsState.pipHeight}
        </p>
        <Slider
          defaultValue={[0]}
          max={50}
          min={2}
          step={1}
          onValueChange={(e) => handleSettingsChange("pipHeight", e[0])}
        />
        <p className="text-2xl py-4">
          Pip Opacity: {crosshairSettingsState.pipOpacity}
        </p>
        <Slider
          defaultValue={[0]}
          max={100}
          min={0}
          step={1}
          onValueChange={(e) => handleSettingsChange("pipOpacity", e[0] / 100)}
        />
        <p className="text-2xl py-4">
          Pip Border: {`${crosshairSettingsState.pipBorder}`}
        </p>
        <Toggle
          defaultPressed={crosshairSettingsState.pipBorder}
          onPressedChange={(e) => handleSettingsChange("pipBorder", !e)}
        >
          Toggle
        </Toggle>

        <Separator className="bg-foreground my-5 h-1" />
        <p className="text-4xl">Dot</p>
        <p className="text-2xl py-4">
          Dot Opacity: {crosshairSettingsState.dotOpacity}
        </p>
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          onValueChange={(e) => handleSettingsChange("dotOpacity", e[0] / 100)}
        />
        <p className="text-2xl py-4">
          Dot Outline Opacity: {crosshairSettingsState.dotOutlineOpacity}
        </p>
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          onValueChange={(e) =>
            handleSettingsChange("dotOutlineOpacity", e[0] / 100)
          }
        />
      </div>

      <div className=" flex-1 border-l-4 ">
        <p className="text-4xl">Color</p>
        <p className="text-2xl py-4">R: {crosshairSettingsState.colorR}</p>
        <Slider
          defaultValue={[255]}
          max={255}
          step={1}
          onValueChange={(e) => handleSettingsChange("colorR", e[0])}
        />
        <p className="text-2xl py-4">G: {crosshairSettingsState.colorG}</p>
        <Slider
          defaultValue={[255]}
          max={255}
          step={1}
          onValueChange={(e) => handleSettingsChange("colorG", e[0])}
        />
        <p className="text-2xl py-4">B: {crosshairSettingsState.colorB}</p>
        <Slider
          defaultValue={[255]}
          max={255}
          step={1}
          onValueChange={(e) => handleSettingsChange("colorB", e[0])}
        />
      </div>
    </div>
  );
}
