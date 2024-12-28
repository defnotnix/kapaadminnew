import { PropConfigModule } from "@vsphere/core";
import { ReactNode } from "react";

type propHintDetails = {
  icon: any;
  title: string;
  description: string;
};

export type PropModuleFormLayout = {
  moduleConfig: PropConfigModule;
  //variant
  variant?: "new" | "edit";
  //hint
  withHint?: boolean;
  hintDetails?: propHintDetails;
  //container
  size?: string | number;
  //steps
  steps?: string[];
  withStepper?: boolean;
  //children
  isLoading?: boolean;
  children: ReactNode;
};
