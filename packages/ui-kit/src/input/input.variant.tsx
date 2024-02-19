import { tv, type VariantProps } from "tailwind-variants";

export const inputVariants = tv({
  base: "rounded-m4 min-w-96 border-8 border-solid border-red-500",
  variants: {
    color: {},
    size: {
      sm: "text-xs",
      md: "text-md",
      lg: "text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm"],
      class: "px-3 py-1",
    },
    {
      size: ["md"],
      class: "px-6 py-2",
    },
    {
      size: ["lg"],
      class: "px-8 py-3",
    },
  ],
  defaultVariants: {
    size: "md",
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;
