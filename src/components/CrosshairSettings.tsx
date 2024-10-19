import { CrosshairSettingsObj } from "@/types";
import { Slider } from "@/components/ui/slider";
import { Separator } from "./ui/separator";
import { Toggle } from "@/components/ui/toggle";
import CrorsshairDisplay from "./crosshairDisplay/CrorsshairDisplay";
import { crosshairPresets } from "@/contants";

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
    <div className=" grid grid-cols-2 ">
      <div className="p-4">
        <p className="text-4xl">Crosshair</p>
        <p className="text-2xl py-4">Gap: {crosshairSettingsState.pipGap}</p>
        <Slider
          value={[crosshairSettingsState.pipGap]}
          defaultValue={[1]}
          max={50}
          min={0}
          step={1}
          onValueChange={(e) => handleSettingsChange("pipGap", e[0])}
        />
        <p className="text-2xl py-4">
          Width: {crosshairSettingsState.pipWidth}
        </p>
        <Slider
          value={[crosshairSettingsState.pipWidth]}
          defaultValue={[3]}
          max={50}
          min={2}
          step={1}
          onValueChange={(e) => handleSettingsChange("pipWidth", e[0])}
        />
        <p className="text-2xl py-4">
          Height: {crosshairSettingsState.pipHeight}
        </p>
        <Slider
          value={[crosshairSettingsState.pipHeight]}
          defaultValue={[18]}
          max={50}
          min={2}
          step={1}
          onValueChange={(e) => handleSettingsChange("pipHeight", e[0])}
        />
        <p className="text-2xl py-4">
          Pip Opacity: {crosshairSettingsState.pipOpacity}
        </p>
        <Slider
          value={[crosshairSettingsState.pipOpacity]}
          defaultValue={[100]}
          max={100}
          min={0}
          step={1}
          onValueChange={(e) => handleSettingsChange("pipOpacity", e[0] / 100)}
        />
        <p className="text-2xl py-4">
          Pip Border: {`${crosshairSettingsState.pipBorder}`}
        </p>
        <Toggle
          className="size-12 rounded-none border-2 "
          pressed={crosshairSettingsState.pipBorder}
          onPressedChange={(e) => {
            handleSettingsChange("pipBorder", e);
          }}
        >
          {" "}
          {crosshairSettingsState.pipBorder ? "off" : "on"}
        </Toggle>

        <Separator className="bg-cream my-5 h-1" />
        <p className="text-4xl">Dot</p>
        <p className="text-2xl py-4">
          Dot Opacity: {crosshairSettingsState.dotOpacity}
        </p>
        <Slider
          value={[crosshairSettingsState.dotOpacity]}
          defaultValue={[0]}
          max={100}
          step={1}
          onValueChange={(e) => handleSettingsChange("dotOpacity", e[0] / 100)}
        />
        <p className="text-2xl py-4">
          Dot Outline Opacity: {crosshairSettingsState.dotOutlineOpacity}
        </p>
        <Slider
          value={[crosshairSettingsState.dotOutlineOpacity]}
          defaultValue={[0]}
          max={100}
          step={1}
          onValueChange={(e) =>
            handleSettingsChange("dotOutlineOpacity", e[0] / 100)
          }
        />
      </div>

      <div className=" flex-1 border-l-4 p-4  ">
        <div className=" ">
          <p className="text-4xl">Color</p>
          <p className="text-2xl py-4">R: {crosshairSettingsState.colorR}</p>
          <Slider
            value={[crosshairSettingsState.colorR]}
            defaultValue={[255]}
            max={255}
            step={1}
            onValueChange={(e) => handleSettingsChange("colorR", e[0])}
          />
          <p className="text-2xl py-4">G: {crosshairSettingsState.colorG}</p>
          <Slider
            value={[crosshairSettingsState.colorG]}
            defaultValue={[255]}
            max={255}
            step={1}
            onValueChange={(e) => handleSettingsChange("colorG", e[0])}
          />
          <p className="text-2xl py-4">B: {crosshairSettingsState.colorB}</p>
          <Slider
            value={[crosshairSettingsState.colorB]}
            defaultValue={[255]}
            max={255}
            step={1}
            onValueChange={(e) => handleSettingsChange("colorB", e[0])}
            className="pb-5"
          />
        </div>
        <div className=" flex  flex-wrap  mt-4 justify-around gap-2 p-1 ">
          {crosshairPresets.map((item, id) => {
            return (
              <button
                key={id}
                className="size-20  black-box  bg-gray-700  border-2 border-cream hover:bg-cream/80 focus:bg-cream/80"
                onClick={() => setCrosshairSettingsSate({ ...item })}
              >
                <CrorsshairDisplay crosshairSettingsState={item} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
