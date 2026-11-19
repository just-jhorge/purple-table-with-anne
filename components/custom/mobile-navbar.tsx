import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { Heart, Menu } from "lucide-react";

export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button size="lg" variant="outline">
            <Menu />
            menu
          </Button>
        }
      />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>MENU</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-6 py-6">
          <ul className="space-y-8 *:text-xl">
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Events</li>
            <li>Get Involved</li>
          </ul>
        </div>
        <SheetFooter>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <Button size="lg" className="w-full">
                <Heart className="fill-primary-foreground" />
                Donate Now
              </Button>
            </div>
            <ModeToggle />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
