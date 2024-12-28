import { PropsWithChildren } from "react";
//vfw
import { QueryWrapper, AppWrapper } from "@vsphere/core";
//themes
import { configMantineTheme } from "../../config/theme/mantine.theme.config";
//styles
import classes from "./app.module.css";
import "@/config/styles/global.css";
import { configApplication } from "@/config/app.config";
//oauth


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
        title="vCommerce"
        classNames={classes}
      >
        {children}
      </AppWrapper>
    </QueryWrapper>
  );
}
