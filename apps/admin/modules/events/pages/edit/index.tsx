"use client";

import { Info } from "@phosphor-icons/react";
//vsphere
import { FormHandler } from "@vsphere/core";
import { ModuleLayout, useAdminNavContext } from "@vsphere/ui";

//form
import { Form } from "../../component/form";
//config
import { formProps } from "../../component/form";
import { configModule } from "../../module.config";
import { useEffect } from "react";
import { createRecord, editRecord, getSingleRecord } from "../../module.api";

import moment from "moment";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Center, Loader } from "@mantine/core";

export function _Edit() {
  // * PAGE CONTEXT

  const { setBreadcrumbs } = useAdminNavContext();
  const Params = useParams();

  const Router = useRouter();

  // * PRELOAD

  useEffect(() => {
    setBreadcrumbs(configModule.bread);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: [...configModule.queryKey, "edit"],
    queryFn: async () => {
      const id = Params.id;
      const res = await getSingleRecord(Params.id);

      return res;
    },
  });

  const RenderFormLayout = () => {
    const form = FormHandler.useForm();

    console.log({
      ...data,
      event_category: String(data.event_category?.id),
      event_date: new Date(data.event_date),
    });

    useEffect(() => {
      form.setValues({
        ...data,
        event_category: String(data.event_category?.id),
        event_date: new Date(data.event_date),
      });
    }, []);

    return <Form.General />;
  };

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
        apiSubmit={editRecord}
        onSubmitSuccess={() => {
          Router.push("/admin/event");
        }}
      >
        <ModuleLayout.Form
          variant="edit"
          isLoading={false}
          size="md"
          moduleConfig={configModule}
          withStepper={false}
          withHint={true}
          hintDetails={{
            icon: <Info />,
            title: "This is a hint",
            description: "This is a hint description",
          }}
        >
          {isLoading ? (
            <Center h={500}>
              <Loader size="xs" />
            </Center>
          ) : (
            <RenderFormLayout />
          )}
        </ModuleLayout.Form>
      </FormHandler>
    </>
  );
}
