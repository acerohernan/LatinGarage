import { LatingGarageTheme } from "./theme/types";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends LatingGarageTheme {}
}
