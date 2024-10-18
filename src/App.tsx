import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import CopySettings from "./components/CopySettings";
import CrorsshairDisplay from "./components/crosshairDisplay/CrorsshairDisplay";

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

  return (
    <div>
      <div className="text-5xl text-center py-6">Deadlock Crosshair</div>
      <div className="container flex justify-between mx-auto ">
        <div className="w-[50%] border-cream border-2">
          <CrorsshairDisplay crosshairSettingsState={crosshairSettingsState} />
          <CopySettings crosshairSettingsState={crosshairSettingsState} />
        </div>
        <div className="w-[45%] border-cream border-2">
          <CrosshairSettings
            setCrosshairSettingsSate={setCrosshairSettingsSate}
            crosshairSettingsState={crosshairSettingsState}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
