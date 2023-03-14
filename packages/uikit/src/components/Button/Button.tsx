import React from "react";
import StyledButton from "./StyledButton";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

export default Button;
