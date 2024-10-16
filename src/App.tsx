import CopySettings from "./components/CopySettings";
import CrorsshairDisplay from "./components/CrorsshairDisplay";
import CrosshaieRGB from "./components/CrosshaieRGB";
import CrosshairSettings from "./components/CrosshairSettings";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="container flex justify-between mx-auto ">
      <div className="w-[55%] outline-dotted outline-red-400">
        <CrorsshairDisplay />
        <CopySettings />
      </div>
      <div className="w-[35%] outline-dotted outline-red-400">
        <CrosshairSettings />
        <CrosshaieRGB />
      </div>
    </div>
  );
}

export default App;
