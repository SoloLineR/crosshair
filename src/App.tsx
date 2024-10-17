import { useState } from "react";
import CopySettings from "./components/CopySettings";
import CrorsshairDisplay from "./components/CrorsshairDisplay";
import CrosshaieRGB from "./components/CrosshaieRGB";
import CrosshairSettings from "./components/CrosshairSettings";
import { CrosshairSettingsObj } from "./types";

const initialState: CrosshairSettingsObj = {
  dotOpacity: 0.0,
  dotOutlineOpacity: 0.0,
  pipBorder: false,
  pipGap: 0,
  pipHeight: 10.0,
  pipOpacity: 1.0,
  pipWidth: 4.0,
  colorR: 89,
  colorG: 255,
  colorB: 47,
};

function App() {
  const [crosshairSettingsState, setCrosshairSettingsSate] =
    useState<CrosshairSettingsObj>(initialState);
  console.log(crosshairSettingsState);

  return (
    <div className="container flex justify-between mx-auto ">
      <div className="w-[50%] outline-dotted outline-red-400">
        <CrorsshairDisplay />
        <CopySettings />
      </div>
      <div className="w-[40%] outline-dotted outline-red-400">
        <CrosshairSettings
          setCrosshairSettingsSate={setCrosshairSettingsSate}
          crosshairSettingsState={crosshairSettingsState}
        />
      </div>
    </div>
  );
}

export default App;
