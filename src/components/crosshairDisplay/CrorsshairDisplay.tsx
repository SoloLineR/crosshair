import { CrosshairSettingsObj } from "@/types";
import styles from "./crosshairDisplay.module.css";
export default function CrorsshairDisplay({
  crosshairSettingsState,
}: {
  crosshairSettingsState: CrosshairSettingsObj;
}) {
  return (
    <div className="bg-[url('../public/display-crosshair.png')] size-full bg-no-repeat bg-cover bg-center relative">
      <span className=""></span>

      <span
        className={styles.dot}
        style={{
          opacity: crosshairSettingsState.dotOpacity,
          border: ` 1px solid rgba(0, 0, 0, ${crosshairSettingsState.dotOutlineOpacity})`,
          backgroundColor: ` rgb(${crosshairSettingsState.colorR},${crosshairSettingsState.colorG},${crosshairSettingsState.colorB})`,
        }}
      ></span>
      <span
        className={styles.topPip}
        style={{
          top: `calc(50% - 10px - ${crosshairSettingsState.pipGap * 2}px)`,
          height: `${crosshairSettingsState.pipHeight}px`,
          width: `${crosshairSettingsState.pipWidth}px`,
          opacity: crosshairSettingsState.pipOpacity,
          border: crosshairSettingsState.pipBorder ? `1px solid black` : "none",
          zIndex: 3,
          backgroundColor: ` rgb(${crosshairSettingsState.colorR},${crosshairSettingsState.colorG},${crosshairSettingsState.colorB})`,
        }}
      ></span>
      <span
        className={styles.bottomPip}
        style={{
          top: `calc(50% + 10px + ${crosshairSettingsState.pipGap * 2}px)`,
          height: `${crosshairSettingsState.pipHeight}px`,
          width: `${crosshairSettingsState.pipWidth}px`,
          opacity: crosshairSettingsState.pipOpacity,
          border: crosshairSettingsState.pipBorder ? `1px solid black` : "none",
          zIndex: 0,
          backgroundColor: ` rgb(${crosshairSettingsState.colorR},${crosshairSettingsState.colorG},${crosshairSettingsState.colorB})`,
        }}
      ></span>
      <span
        className={styles.leftPip}
        style={{
          left: `calc(50% - 10px - ${crosshairSettingsState.pipGap * 2}px)`,
          width: `${crosshairSettingsState.pipHeight}px`,
          height: `${crosshairSettingsState.pipWidth}px`,
          opacity: crosshairSettingsState.pipOpacity,
          border: crosshairSettingsState.pipBorder ? `1px solid black` : "none",
          zIndex: 2,
          backgroundColor: ` rgb(${crosshairSettingsState.colorR},${crosshairSettingsState.colorG},${crosshairSettingsState.colorB})`,
        }}
      ></span>
      <span
        className={styles.rightPip}
        style={{
          left: `calc(50% + 10px + ${crosshairSettingsState.pipGap * 2}px)`,
          width: `${crosshairSettingsState.pipHeight}px`,
          height: `${crosshairSettingsState.pipWidth}px`,
          opacity: crosshairSettingsState.pipOpacity,
          border: crosshairSettingsState.pipBorder ? `1px solid black` : "none",
          zIndex: 1,
          backgroundColor: ` rgb(${crosshairSettingsState.colorR},${crosshairSettingsState.colorG},${crosshairSettingsState.colorB})`,
        }}
      ></span>
    </div>
  );
}
