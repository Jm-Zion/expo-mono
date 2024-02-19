import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { buttonVariant } from "./Button.variant";
import type { ButtonVariants } from "./Button.variant";

//duration-2000 duration-250 rounded-sm bg-indigo-500 px-4 py-2 ring-1 ring-indigo-600 transition-colors will-change-transform hover:bg-indigo-400 active:bg-indigo-200
/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonVariants & { label: string }) => {
  const { button, text } = buttonVariant(props);
  return (
    <TouchableOpacity className={button()}>
      <Text className={text()}>{props.label}</Text>
    </TouchableOpacity>
  );
};
