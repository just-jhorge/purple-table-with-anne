import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent h-auto lg:h-16 flex items-center py-10 lg:py-0">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-0">
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            &copy;2026 Purple Table with Anne. All rights reserved.
          </p>
          <div className="flex items-center justify-center">
            <ul className="flex items-center gap-6 text-sm">
              <li>About Us</li>
              <li>Programs</li>
              <li>Events</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <ul className="flex items-center gap-4">
              <li>
                <Image
                  src="/logos/instagram.png"
                  alt="Instagram"
                  height={24}
                  width={24}
                />
              </li>
              <li>
                <Image
                  src="/logos/whatsapp.png"
                  alt="WhatsApp"
                  height={24}
                  width={24}
                />
              </li>
              <li>
                <Image
                  src="/logos/facebook.png"
                  alt="Facebook"
                  height={24}
                  width={24}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
