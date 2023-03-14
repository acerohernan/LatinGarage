import styled from "styled-components";
import { ButtonProps } from "./types";

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  transition: 0.3s all ease-in-out;
  ${({ theme }) => `background-color: ${theme.colors.primary};`}
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

export default StyledButton;
