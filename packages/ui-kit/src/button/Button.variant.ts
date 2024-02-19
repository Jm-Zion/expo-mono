import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariant = tv({
  slots: {
    button: "bg-primary rounded-md  font-medium active:opacity-80",
    text: "text-white",
  },
  variants: {
    color: {
      primary: {
        text: "text-white",
      },
      secondary: {
        button: "bg-secondary",
        text: "text-white",
      },
    },
    size: {
      sm: { text: "text-xs" },
      md: { text: "text-md" },
      lg: { text: "text-lg" },
    },
  },
  compoundVariants: [
    {
      size: ["sm"],
      class: { button: "px-3 py-1" },
    },
    {
      size: ["md"],
      class: { button: "px-6 py-2" },
    },
    {
      size: ["lg"],
      class: { button: "px-8 py-3" },
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariant>;
