import React, { PropsWithChildren } from "react";
//vfw
import { QueryWrapper, AppWrapper } from "@vsphere/core";
//themes
import { configMantineTheme } from "../../config/theme/mantine.theme.config";
//styles
import classes from "./app.module.css";
import "@/assets/styles/global.css";
//config
import { configApplication } from "@/config/app.config";
//query
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContext } from "./app.content";

export function LayoutApp({ children }: PropsWithChildren) {
  return (
    <QueryWrapper
      apiProvider={configApplication.endpoint_baseurl}
      queryProps={{
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }}
    >
      <AppWrapper
        theme={configMantineTheme}
        defaultColorScheme={"light"}
        title="Classics Projects"
        classNames={classes}
      >
        <AppContext>{children}</AppContext>
      </AppWrapper>
    </QueryWrapper>
  );
}
