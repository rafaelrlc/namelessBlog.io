import React, { ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card";

import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import { Button } from "./ui/button";

interface HoverCardPopUpProps {
  hoverTrigger: ReactNode;
}

const HoverCardUserProfile = ({ hoverTrigger }: HoverCardPopUpProps) => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger asChild>{hoverTrigger}</HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>

            <div className="space-y-2">
              <div className="flex gap-2 justify-start items-center">
                <h4 className="text-sm font-semibold">@rafaelrlc</h4>
                <Button className="h-5">Follow</Button>
              </div>

              <p className="text-sm">
                Im a software developer from Brazil. Im currently working at
                @nameless.
              </p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HoverCardUserProfile;
