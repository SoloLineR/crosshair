import { CrosshairSettingsObj } from "@/types";
import { Button } from "./ui/button";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import CrorsshairDisplay from "./crosshairDisplay/CrorsshairDisplay";
import { useEffect, useState } from "react";
export default function SavedConfigs({
  crosshairSettingsState,
  setCrosshairSettingsSate,
}: {
  crosshairSettingsState: CrosshairSettingsObj;
  setCrosshairSettingsSate: (obj: CrosshairSettingsObj) => void;
}) {
  const [savedCH, setSavedCH] = useState<
    (CrosshairSettingsObj & { id: string })[]
  >([]);
  function handleSave() {
    const newConfig = { id: uuidv4(), ...crosshairSettingsState };
    const updatedItems = [...savedCH, newConfig];

    localStorage.setItem("savedConfigs", JSON.stringify(updatedItems));
    setSavedCH(updatedItems);
    toast.success("Config saved successfully");
  }
  function handleDelete(id: string) {
    const updatedItems = savedCH.filter((ch) => ch.id !== id);

    localStorage.setItem("savedConfigs", JSON.stringify(updatedItems));
    setSavedCH(updatedItems);
    toast.success("Config deleted successfully");
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("savedConfigs")!) || [];
    setSavedCH(items);
  }, []);

  return (
    <div className=" flex justify-between p-3">
      <Button onClick={handleSave}>Save config</Button>
      <ScrollArea className="h-60 w-48 rounded-md border ml-2">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none text-center">
            Your saved crosshairs
          </h4>
          {savedCH.length !== 0 ? (
            savedCH.map((ch, id) => (
              <div key={ch.id}>
                <div className="text-sm">
                  <HoverCard openDelay={300}>
                    <HoverCardTrigger>
                      <Button
                        onClick={() => setCrosshairSettingsSate(ch)}
                        className="w-full"
                      >
                        {id + 1}
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className=" black-box size-80 content-center  bg-gray-700">
                      <CrorsshairDisplay crosshairSettingsState={ch} />
                      <Button
                        onClick={() => handleDelete(ch.id)}
                        className="absolute bottom-1 left-[3px]"
                      >
                        DELETE
                      </Button>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <Separator className="my-2" />
              </div>
            ))
          ) : (
            <div> There is no saved config</div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
