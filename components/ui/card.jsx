import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Card container component that renders a styled div with a "card" data-slot.
 *
 * Merges a set of default card classes with an optional `className` and forwards
 * any additional props to the root div (useful for event handlers, aria attributes, etc.).
 *
 * @param {string} [className] - Optional additional CSS classes to merge with the card's defaults.
 * @returns {JSX.Element} The rendered card element.
 */
function Card({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props} />
  );
}

/**
 * CardHeader — presentational header container for a Card.
 *
 * Renders a div with data-slot="card-header" and default layout classes used to
 * position title, description and optional card actions within a card.
 *
 * @param {string} [className] - Additional CSS class names to merge with the component's defaults.
 * @return {JSX.Element} The rendered card header element.
 */
function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />
  );
}

/**
 * Render the card title slot for a Card component.
 *
 * Renders a div with data-slot="card-title" and default title typography.
 *
 * @param {string} [className] - Additional CSS classes to merge with the component's default typography classes.
 * @returns {JSX.Element} The card title element.
 */
function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />
  );
}

/**
 * Renders the card's description area.
 *
 * Outputs a <div data-slot="card-description"> with default muted small-text styling merged with any provided `className`. All other props are forwarded to the root element.
 */
function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

/**
 * Positioned container for action elements inside a Card.
 *
 * Renders a div with `data-slot="card-action"` and default grid/alignment classes that place actions in the top-right area of the card header. Merges the provided `className` with the defaults and forwards any additional props to the root element.
 *
 * @param {string} [className] - Optional additional class names to merge with the component's default positioning classes.
 */
function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

/**
 * Container for the main card content.
 *
 * Renders a div with data-slot="card-content" and default horizontal padding ("px-6").
 * Any provided `className` is merged with the default classes; all other props are spread onto the root element.
 *
 * @param {string} [className] - Additional CSS classes appended to the default padding.
 * @returns {JSX.Element} The rendered content container.
 */
function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

/**
 * Card footer container rendered as a div with `data-slot="card-footer"`.
 * Merges default footer layout classes with an optional `className` and forwards remaining props to the root element.
 *
 * @param {string} [className] - Additional class names to merge with the component's defaults.
 * @returns {JSX.Element} The footer div element.
 */
function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
