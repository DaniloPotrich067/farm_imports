
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center",
    "gap-2 whitespace-nowrap rounded-lg border border-transparent",
    "text-sm font-semibold transition-colors",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-2 active:scale-[0.98]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        outline:
          "border-border bg-background text-foreground hover:bg-muted",

        ghost:
          "text-foreground hover:bg-muted",

        destructive:
          "bg-destructive text-white hover:bg-destructive/90",

        link:
          "text-primary underline-offset-4 hover:underline",

        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1EBE5D]",

        cart:
          "bg-foreground text-background hover:bg-foreground/90",
      },

      size: {
        xs: "h-7 rounded-md px-2 text-xs",
        sm: "h-9 rounded-lg px-3 text-sm",
        default: "h-10 px-4 py-2",
        lg: "h-11 rounded-lg px-6 text-base",
        xl: "h-12 rounded-xl px-7 text-base",
        icon: "size-10 p-0",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-12 rounded-xl p-0",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
