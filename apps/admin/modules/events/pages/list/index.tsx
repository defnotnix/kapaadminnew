"use client";

import { ModuleLayout, useAdminNavContext } from "@vsphere/ui";
import { useEffect } from "react";
import { configModule } from "../../module.config";
import { ListHandler } from "@vsphere/core";
import { deleteRecord, getRecords } from "../../module.api";
import { columns } from "./list.column";
import { ActionIcon } from "@mantine/core";
import { Invoice, PictureInPicture } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";

export function _List() {
  const { setBreadcrumbs } = useAdminNavContext();

  const Router = useRouter();
  const Pathname = usePathname();

  useEffect(() => {
    setBreadcrumbs(configModule.bread);
  }, []);

  return (
    <>
      <ListHandler endpoint={configModule.endpoint || ""} api={getRecords}>
        <ModuleLayout.Table
          hideView
          idAccessor="id"
          apiDelete={deleteRecord}
          // * CONFIG
          moduleConfig={configModule}
          // * TABS
          tabs={[
            { label: "All Records", count: 3344 },
            { label: "Active", count: 2233 },
            { label: "Inactive" },
          ]}
          // * TABLE DATA
          columns={columns}
          // * ROW COLORS
          rowStyle={({ account_type }: any) => {
            switch (account_type) {
              case "Asset":
                return {
                  background: "var(--mantine-color-indigo-0)",
                };
              case "Liability":
                return {
                  background: "var(--mantine-color-teal-0)",
                };
              case "Equity":
                return {
                  background: "var(--mantine-color-blue-0)",
                };
              case "Expenses":
                return {
                  background: "var(--mantine-color-orange-0)",
                };
              default:
                return {};
            }
          }}
          tableprops={{
            height: "calc(100vh - 200px)",
          }}
          //extra
          extraActions={({ row }: { row: any }) => (
            <ActionIcon
              size="sm"
              variant="subtle"
              color="teal"
              onClick={() => {
                Router.push("/admin/event/gallery/" + row.id);
              }}
            >
              <PictureInPicture />
            </ActionIcon>
          )}
        />
      </ListHandler>
    </>
  );
}
