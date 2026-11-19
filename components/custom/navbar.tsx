import Image from "next/image";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import MobileNavbar from "./mobile-navbar";

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-border flex items-center bg-background">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3">
          <div className="flex items-center">
            <div className="relative">
              <Image
                src="/logos/logo.png"
                alt="Purple table with Anne"
                height={100}
                width={100}
                className="-translate-x-6"
              />
            </div>
            <h5 className="hidden sm:block font-medium text-primary font-heading -translate-x-10">
              Purple Table with Anne
            </h5>
          </div>
          <ul className="hidden sm:flex items-center gap-6">
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Events</li>
            <li>Get Involved</li>
          </ul>
          <div className="hidden sm:flex items-center justify-end gap-2">
            <Button>
              <Heart />
              Donate
            </Button>
            <ModeToggle />
          </div>
          <div className="sm:hidden flex items-center justify-end">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </nav>
  );
}
