"use client";

import { useEffect } from "react";
//vsphere
import { ListHandler } from "@vsphere/core";
import { ModuleLayout, useAdminNavContext } from "@vsphere/ui";
//api

//columns
import { columns } from "./list.column";
//config;
import { configModule } from "../../module.config";
//form
import { Form, formProps } from "../../components/form";
import { useParams, useSearchParams } from "next/navigation";
import {
  createRecord,
  deleteRecord,
  editRecord,
  getRecords,
} from "../../module.api";
import { useQueryClient } from "@tanstack/react-query";

export function _List() {
  // * PAGE CONTEXT

  const QueryClient = useQueryClient();

  const { setBreadcrumbs } = useAdminNavContext();

  const Params = useParams();
  // * PRELOAD

  useEffect(() => {
    setBreadcrumbs(configModule.bread);
  }, []);

  return (
    <ListHandler
      endpoint={configModule.endpoint}
      api={getRecords}
      addToURL={"?company_id=" + Params.id}
    >
      <ModuleLayout.Table
        hideView
        // * API
        apiCreate={createRecord}
        apiDelete={deleteRecord}
        apiEdit={editRecord}
        onEditTrigger={async (row) => {
          return row;
        }}
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
        //* MODAL STUFFS
        hasModalForms
        modalFormProps={{
          width: "lg",

          formProps: {
            ...formProps,
            transformDataOnSubmit: (formdata) => {
              const { avatar, signature_image, ...rest } = formdata;
              return {
                ...rest,
                ...(avatar instanceof File ? { avatar } : {}),
                ...(signature_image instanceof File ? { signature_image } : {}),
                company: String(formdata.company),
              };
            },
          },
        }}
        modalFormComponent={<Form.General />}
      />
    </ListHandler>
  );
}
