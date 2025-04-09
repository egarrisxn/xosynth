"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import * as React from "react";

import { cn } from "@/lib/utils";

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="font-base h-full w-full">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="bg-border relative flex-1 rounded-full" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };

// "use client";

// import * as React from "react";
// import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

// import { cn } from "@/lib/utils";

// const ScrollArea = React.forwardRef<
//   React.ElementRef<typeof ScrollAreaPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
// >(({ className, children, ...props }, ref) => (
//   <ScrollAreaPrimitive.Root
//     ref={ref}
//     className={cn("relative overflow-hidden", className)}
//     {...props}
//   >
//     <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
//       {children}
//     </ScrollAreaPrimitive.Viewport>
//     <ScrollBar />
//     <ScrollAreaPrimitive.Corner />
//   </ScrollAreaPrimitive.Root>
// ));
// ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

// const ScrollBar = React.forwardRef<
//   React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
//   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
// >(({ className, orientation = "vertical", ...props }, ref) => (
//   <ScrollAreaPrimitive.ScrollAreaScrollbar
//     ref={ref}
//     orientation={orientation}
//     className={cn(
//       "flex touch-none transition-colors select-none",
//       orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
//       orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
//       className,
//     )}
//     {...props}
//   >
//     <ScrollAreaPrimitive.ScrollAreaThumb className="bg-border relative flex-1 rounded-full" />
//   </ScrollAreaPrimitive.ScrollAreaScrollbar>
// ));
// ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// export { ScrollArea, ScrollBar };
