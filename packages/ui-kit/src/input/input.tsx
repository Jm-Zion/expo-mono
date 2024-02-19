import React from "react";
import { TextInput, type TextInputProps } from "react-native";

import { inputVariants } from "./input.variant";
import type { InputVariants } from "./input.variant";

//duration-2000 duration-250 rounded-sm bg-indigo-500 px-4 py-2 ring-1 ring-indigo-600 transition-colors will-change-transform hover:bg-indigo-400 active:bg-indigo-200
/**
 * Primary UI component for user interaction
 */
export const Input = (props: InputVariants & TextInputProps) => {
  return <TextInput {...props} className={inputVariants()} />;
};
