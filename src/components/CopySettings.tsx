import { CrosshairSettingsObj } from "@/types";
import { Button } from "./ui/button";
import { toast } from "sonner";
export default function CopySettings({
  crosshairSettingsState,
}: {
  crosshairSettingsState: CrosshairSettingsObj;
}) {
  const config = `
citadel_crosshair_color_b ${crosshairSettingsState.colorB};
citadel_crosshair_color_g ${crosshairSettingsState.colorG};
citadel_crosshair_color_r ${crosshairSettingsState.colorR};
citadel_crosshair_dot_opacity ${crosshairSettingsState.dotOpacity}; 
citadel_crosshair_dot_outline_opacity ${crosshairSettingsState.dotOutlineOpacity}; 
citadel_crosshair_pip_border  ${crosshairSettingsState.pipBorder}; 
citadel_crosshair_pip_gap  ${crosshairSettingsState.pipGap}; 
citadel_crosshair_pip_height  ${crosshairSettingsState.pipHeight}; 
citadel_crosshair_pip_opacity ${crosshairSettingsState.pipOpacity}; 
citadel_crosshair_pip_width ${crosshairSettingsState.pipWidth};
`;

  function handleCopy() {
    navigator.clipboard
      .writeText(config)
      .then(() => {
        toast.success("Config copied to clipboard");
      })
      .catch((err) => {
        toast.error("Failed to copy text: ", err);
      });
  }

  return (
    <div className="my-3 flex justify-end gap-4">
      <div>Paste the config into the game console. (Default key F7)</div>
      <Button className="rounded-lg py-1" onClick={handleCopy}>
        Copy config
      </Button>
    </div>
  );
}
