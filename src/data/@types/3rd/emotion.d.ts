import Apptheme from "ui/themes/app-theme";

type PaperThemetype = typeof Apptheme;

declare module "@emotion/react" {
  export interface Theme extends PaperThemetype {}
}
