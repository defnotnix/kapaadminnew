"use client";

import { Info } from "@phosphor-icons/react";
//vsphere
import { FormHandler } from "@vsphere/core";
import { ModuleLayout, useAdminNavContext } from "@vsphere/ui";

//form
import { Form } from "../../components/form";
//config
import { formProps } from "../../components/form";
import { configModule } from "../../module.config";
import { useEffect } from "react";
import { createRecord } from "../../module.api";

import moment from "moment";

export function _New() {
  // * PAGE CONTEXT

  const { setBreadcrumbs } = useAdminNavContext();

  // * PRELOAD

  useEffect(() => {
    setBreadcrumbs(configModule.bread);
  }, []);

  return (
    <>
      <FormHandler
        {...formProps}
        transformDataOnSubmit={(formdata) => {
          return {
            ...formdata,
            event_date: moment(formdata?.event_date || new Date()).format(
              "YYYY-MM-DD"
            ),
          };
        }}
        apiSubmit={createRecord}
      >
        <ModuleLayout.Form
          isLoading={false}
          size="md"
          moduleConfig={configModule}
          variant="new"
          withStepper={false}
          withHint={true}
          hintDetails={{
            icon: <Info />,
            title: "This is a hint",
            description: "This is a hint description",
          }}
        >
          <Form.General />
        </ModuleLayout.Form>
      </FormHandler>
    </>
  );
}
