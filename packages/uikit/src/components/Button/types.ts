import { ComponentProps } from "react";

export interface ButtonProps extends Omit<ComponentProps<"button">, "ref"> {
  disabled?: boolean;
}
