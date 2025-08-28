"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Wrapper around Radix DropdownMenu Root that injects a data-slot attribute and forwards all props.
 *
 * This component renders the Radix DropdownMenu root element with data-slot="dropdown-menu" so it can be identified/styled,
 * and passes through any provided props (including children, event handlers, and configuration).
 * @returns {JSX.Element} The rendered DropdownMenu root element.
 */
function DropdownMenu({
  ...props
}) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

/**
 * Wrapper around Radix DropdownMenu Portal that adds a data-slot attribute and forwards all props.
 *
 * Renders a DropdownMenuPrimitive.Portal with data-slot="dropdown-menu-portal" and passes through any provided props.
 */
function DropdownMenuPortal({
  ...props
}) {
  return (<DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />);
}

/**
 * Trigger element for the dropdown menu that forwards all props to Radix's Trigger.
 *
 * Renders a DropdownMenuTrigger that adds `data-slot="dropdown-menu-trigger"` and passes
 * all received props through to the underlying Radix DropdownMenu Primitive.Trigger.
 *
 * @param {object} props - Props forwarded to the underlying Trigger (e.g., children, onClick, className, ref).
 * @returns {JSX.Element} The rendered Trigger element.
 */
function DropdownMenuTrigger({
  ...props
}) {
  return (<DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />);
}

/**
 * Render the dropdown menu content inside a Portal with default styling and animations.
 *
 * Renders Radix's DropdownMenu Content within a Portal, applies a set of default
 * utility classes (layout, animations, overflow handling, and theming), merges any
 * user-provided `className`, and forwards all other props to the underlying Content.
 *
 * @param {string} [className] - Additional class names to merge with the component's defaults.
 * @param {number} [sideOffset=4] - Offset from the trigger to position the content (passed to Radix Content).
 * @returns {JSX.Element} The rendered dropdown menu content wrapped in a Portal.
 */
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

/**
 * Group related menu items inside a dropdown.
 *
 * Renders a Radix DropdownMenu.Group, forwards all received props to it,
 * and sets data-slot="dropdown-menu-group" for instrumentation/styling.
 *
 * @param {object} props - Props to pass through to Radix's DropdownMenu.Group (children, className, etc.).
 * @returns {JSX.Element} The rendered DropdownMenu.Group element.
 */
function DropdownMenuGroup({
  ...props
}) {
  return (<DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />);
}

/**
 * Styled dropdown menu item that forwards props to Radix's DropdownMenu.Item.
 *
 * Renders a selectable menu item with standardized spacing, disabled handling, inset support,
 * and visual variants (e.g., `"destructive"`). User classes passed via `className` are merged
 * with the component's default styles.
 *
 * @param {string} [className] - Additional CSS classes to append to the default styles.
 * @param {boolean} [inset] - If true, applies inset padding for items aligned with icons.
 * @param {string} [variant="default"] - Visual variant name; `"destructive"` applies destructive styles.
 * @returns {JSX.Element} The rendered dropdown menu item.
 */
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />
  );
}

/**
 * A styled checkbox menu item for use inside DropdownMenu that displays a check indicator when selected.
 *
 * Renders a Radix CheckboxItem with consistent styling and an embedded check icon. Forwards all other props
 * to the underlying CheckboxItem (including event handlers and accessibility props).
 *
 * @param {string} [className] - Optional additional CSS class names to merge with the component's default classes.
 * @param {import('react').ReactNode} [children] - Content displayed for the menu item.
 * @param {boolean} [checked] - Whether the checkbox item is checked.
 * @returns {import('react').ReactElement} A DropdownMenu checkbox item element.
 */
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}>
      <span
        className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

/**
 * A thin wrapper around Radix's RadioGroup primitive for use in the dropdown menu.
 *
 * Renders a RadioGroup with data-slot="dropdown-menu-radio-group" and forwards all props to the underlying Radix primitive.
 *
 * @returns {JSX.Element} The rendered DropdownMenu radio group element.
 */
function DropdownMenuRadioGroup({
  ...props
}) {
  return (<DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />);
}

/**
 * Styled wrapper around Radix's RadioItem for use in the dropdown menu.
 *
 * Renders a radio-style menu item with built-in layout, keyboard/focus styles, and a circular selection indicator.
 * The provided `className` is merged with the component's default classes. All other props are forwarded to the underlying Radix RadioItem.
 *
 * @param {string} [className] - Additional CSS class names to merge with the component's default styling.
 * @param {React.ReactNode} [children] - Content to display inside the radio item (label or node).
 * @returns {JSX.Element} The rendered dropdown menu radio item.
 */
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      <span
        className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

/**
 * Render a styled label for the dropdown menu, forwarding props to Radix's Label primitive.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Additional CSS classes merged with the component's default label styles.
 * @param {boolean} [props.inset=false] - When true, applies inset spacing (adds left padding).
 * @returns {JSX.Element} A DropdownMenu label element with `data-slot="dropdown-menu-label"`.
 */
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props} />
  );
}

/**
 * Styled separator used inside the dropdown menu.
 *
 * Wraps Radix's Separator primitive, applies default layout and border classes,
 * merges any provided `className`, sets `data-slot="dropdown-menu-separator"`,
 * and forwards all other props to the underlying primitive.
 *
 * @param {string} [className] - Additional class names to merge with the default styles.
 * @return {JSX.Element} A DropdownMenu separator element.
 */
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props} />
  );
}

/**
 * Renders a styled inline element for displaying keyboard shortcuts inside a dropdown item.
 *
 * @param {string} [className] - Additional CSS classes to merge with the default shortcut styles.
 * @return {JSX.Element} The rendered shortcut <span> element.
 */
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props} />
  );
}

/**
 * Wrapper around Radix DropdownMenu Sub that attaches a data-slot and forwards all props.
 *
 * Renders a <DropdownMenuPrimitive.Sub> with data-slot="dropdown-menu-sub" and spreads the provided props (including children).
 * @returns {JSX.Element} The Radix Sub component instance.
 */
function DropdownMenuSub({
  ...props
}) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

/**
 * Submenu trigger for a dropdown menu that displays its children and a trailing chevron.
 *
 * Renders a Radix SubTrigger styled for this project's dropdown system and appends a right-facing chevron icon to indicate a nested submenu.
 *
 * @param {string} [className] - Additional CSS classes to merge with the component's default styles.
 * @param {boolean} [inset] - When true, applies inset styling (used to align nested items).
 * @param {import('react').ReactNode} [children] - Content to display inside the trigger.
 * @returns {JSX.Element} A styled submenu trigger element.
 */
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      {...props}>
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

/**
 * Styled wrapper around Radix's DropdownMenu.SubContent for submenu content.
 *
 * Renders a SubContent element with a default set of layout, animation, and theme classes
 * (including data-state and data-side driven transitions) and a data-slot="dropdown-menu-sub-content".
 *
 * @param {string} [className] - Additional CSS classes to merge with the component's default styles.
 * @returns {JSX.Element} The rendered submenu content element.
 */
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props} />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
