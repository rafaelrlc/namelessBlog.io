import React, { ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card";

import { Avatar, AvatarImage } from "@/app/components/ui/avatar";

interface HoverCardPopUpProps {
  hoverTrigger: ReactNode;
}

const HoverCardPopUp = ({ hoverTrigger }: HoverCardPopUpProps) => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger asChild>{hoverTrigger}</HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@rafaelrlc</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
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

export default HoverCardPopUp;
