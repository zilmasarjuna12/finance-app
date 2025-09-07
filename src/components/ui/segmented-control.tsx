// AlignUI SegmentedControl v0.0.0

"use client";

import * as React from "react";
import { Slottable } from "@radix-ui/react-slot";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import mergeRefs from "merge-refs";

import { useTabObserver } from "@/hooks/use-tab-observer";
import { cn } from "@/utils/cn";

const SegmentedControlRoot = TabsPrimitive.Root;
SegmentedControlRoot.displayName = "SegmentedControlRoot";

const SegmentedControlList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    floatingBgClassName?: string;
  }
>(({ children, className, floatingBgClassName, ...rest }, forwardedRef) => {
  const [lineStyle, setLineStyle] = React.useState({ width: 0, left: 0 });

  const { mounted, listRef } = useTabObserver({
    onActiveTabChange: (_, activeTab) => {
      const { offsetWidth: width, offsetLeft: left } = activeTab;
      setLineStyle({ width, left });
    },
  });

  return (
    <TabsPrimitive.List
      ref={mergeRefs(forwardedRef, listRef)}
      className={cn(
        "relative isolate grid w-full auto-cols-fr grid-flow-col gap-1 rounded-[90px] bg-[#F4F6F6] p-1",
        className
      )}
      {...rest}
    >
      <Slottable>{children}</Slottable>

      {/* floating bg */}
      <div
        className={cn(
          "absolute inset-y-1 left-0 -z-10 rounded-[90px] bg-white shadow-toggle-switch transition-transform duration-300",
          {
            hidden: !mounted,
          },
          floatingBgClassName
        )}
        style={{
          transform: `translate3d(${lineStyle.left}px, 0, 0)`,
          width: `${lineStyle.width}px`,
          transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
        }}
        aria-hidden="true"
      />
    </TabsPrimitive.List>
  );
});
SegmentedControlList.displayName = "SegmentedControlList";

const SegmentedControlTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <TabsPrimitive.Trigger
      ref={forwardedRef}
      className={cn(
        "cursor-pointer",
        // base
        "peer",
        "relative z-10 h-12 whitespace-nowrap rounded-[90px] px-1 text-label-sm text-[#666666] outline-none",
        "flex items-center justify-center gap-1.5",
        "transition duration-300 ease-out",
        "font-semibold text-[14px]",

        // focus
        "focus:outline-none",
        className
      )}
      {...rest}
    />
  );
});
SegmentedControlTrigger.displayName = "SegmentedControlTrigger";

const SegmentedControlContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ ...rest }, forwardedRef) => {
  return <TabsPrimitive.Content ref={forwardedRef} {...rest} />;
});
SegmentedControlContent.displayName = "SegmentedControlContent";

export {
  SegmentedControlRoot as Root,
  SegmentedControlList as List,
  SegmentedControlTrigger as Trigger,
  SegmentedControlContent as Content,
};
