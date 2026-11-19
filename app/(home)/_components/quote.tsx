import React from "react";

export default function Quote() {
  return (
    <div className="bg-background px-4 lg:px-0 pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="w-full border-l-8 border-primary px-4 space-y-4 py-2">
          <p className="italic text-sm">
            For I was hungry, and you gave Me something to eat; I was thirsty,
            and you gave Me something to drink; I was a stranger, and you
            invited Me in; naked, and you clothed Me; I was sick, and you
            visited Me; I was in prison, and you came to Me.` Then the righteous
            will answer Him, `Lord, when did we see You hungry, and feed You, or
            thirsty, and give You something to drink? And when did we see You a
            stranger, and invite You in, or naked, and clothe You? When did we
            see You sick, or in prison, and come to You?` The King will answer
            and say to them, `Truly I say to you, to the extent that you did it
            to one of these brothers of Mine, even the least of them, you did it
            to Me.`
          </p>
          <p className="text-xs text-muted-foreground font-medium">
            - Matthew 25:35-40
          </p>
        </div>
      </div>
    </div>
  );
}
