import { useState } from "react";
import CopySettings from "./components/CopySettings";
import CrorsshairDisplay from "./components/crosshairDisplay/CrorsshairDisplay";
import CrosshaieRGB from "./components/CrosshaieRGB";
import CrosshairSettings from "./components/CrosshairSettings";
import { CrosshairSettingsObj } from "./types";

const initialState: CrosshairSettingsObj = {
  dotOpacity: 0,
  dotOutlineOpacity: 0,
  pipBorder: false,
  pipGap: 1,
  pipHeight: 18,
  pipOpacity: 1,
  pipWidth: 3,
  colorR: 255,
  colorG: 255,
  colorB: 255,
};

function App() {
  const [crosshairSettingsState, setCrosshairSettingsSate] =
    useState<CrosshairSettingsObj>(initialState);
  console.log(crosshairSettingsState);

  return (
    <div>
      <div>deadlock</div>
      <div className="container flex justify-between mx-auto ">
        <div className="w-[50%] outline-dotted outline-red-400">
          <CrorsshairDisplay crosshairSettingsState={crosshairSettingsState} />
          <CopySettings />
        </div>
        <div className="w-[40%] outline-dotted outline-red-400">
          <CrosshairSettings
            setCrosshairSettingsSate={setCrosshairSettingsSate}
            crosshairSettingsState={crosshairSettingsState}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
