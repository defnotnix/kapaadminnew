import { Icon } from "@phosphor-icons/react";

export type PropConfigModuleBread = {
  label: string;
  url?: string;
  icon?: Icon;
};

export type PropConfigModule = {
  queryKey: string[];
  moduleName: string;
  endpoint: string;
  moduleDescription: {
    default: string;
    new: string;
  };
  bread: PropConfigModuleBread[];
} & any;
