import { ReactNode } from "react";

export type PropAppWrapper = {
  children: ReactNode;
  theme?: any;
  defaultColorScheme?: any;
  title?: string;
  classNames?: any;
};
