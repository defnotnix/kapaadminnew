import { ReactNode } from "react";

export type PropPageModuleOverview = {
  title: string;
  description: string;
  importName: string;
  importURL: string;
  dependencies?: string[];
  baseUrl: string;
  //*
  children: ReactNode;
};
