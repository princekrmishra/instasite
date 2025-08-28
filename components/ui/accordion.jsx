"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Render a Radix Accordion root and forward all props.
 *
 * Renders an AccordionPrimitive.Root element with a data-slot="accordion" attribute.
 *
 * @returns {JSX.Element} The Accordion root element.
 */
function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

/**
 * Renders a styled Accordion item.
 *
 * Wraps `AccordionPrimitive.Item`, applying a bottom border (except on the last item),
 * merging any provided `className` with the default "border-b last:border-b-0" via `cn`,
 * forwards all other props, and sets `data-slot="accordion-item"` for styling/testing hooks.
 *
 * @param {object} props - Props forwarded to `AccordionPrimitive.Item`. `className` will be merged with default styles.
 * @returns {JSX.Element} The accordion item element.
 */
function AccordionItem({
  className,
  ...props
}) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props} />
  );
}

/**
 * Renders the clickable header for an accordion item with a rotating chevron icon.
 *
 * The component composes Radix's Accordion Header and Trigger, applies default styling,
 * and forwards additional props to the underlying Trigger. The ChevronDownIcon rotates
 * when the trigger's state is open.
 *
 * @param {string} [className] - Additional CSS classes merged with the component's defaults.
 * @param {React.ReactNode} children - Content displayed inside the trigger (typically the section title).
 * @param {object} [props] - Additional props passed through to the underlying Radix Accordion Trigger.
 * @returns {JSX.Element} The Accordion trigger element.
 */
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}>
        {children}
        <ChevronDownIcon
          className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

/**
 * Renders the collapsible content area for an accordion item.
 *
 * Wraps children in an inner padded container and applies state-driven open/close
 * animations, overflow handling, and small text sizing. All other props are
 * forwarded to Radix's AccordionPrimitive.Content.
 *
 * @param {Object} props
 * @param {string} [props.className] - Additional class names applied to the inner wrapper.
 * @param {import('react').ReactNode} props.children - Content to display inside the panel.
 * @returns {JSX.Element} The accordion content element.
 */
function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
