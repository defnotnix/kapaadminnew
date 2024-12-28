import { PropFormHandlerWithoutChildren } from "@vsphere/core";
import { ReactNode } from "react";

type DataTable = {
  idAccessor?: string;
};

type ExtraContent = {
  contentPreHeader?: ReactNode;
  contentPreTable?: ReactNode;
  contentPostTable?: ReactNode;
};

type PropTabs = {
  icon?: any;
  label: string;
  titleLabel?: string;
  onChange?: (id: any) => void;
  count?: number | string;
};

type PropHeader = {
  //tabs
  tabs?: PropTabs[];
  tabsSize?: number;
  enableTabLabel?: boolean;
};

type modalFormProps = {
  width?: string;
  formProps: PropFormHandlerWithoutChildren;
};

type PropModalFormHandler = {
  hasModalForms?: boolean;
  modalFormProps?: modalFormProps;
  modalFormComponent?: JSX.Element;
  //modals
  modalCreate?: () => JSX.Element;
  modalEdit?: ({ record, opened, handlers }: any) => JSX.Element;
  onDelete?: (id: any) => void;
  onDeleteSuccess?: (id: any) => void;
  //Edit
  onEditTrigger?: (id: string | number) => any;
};

export type PropModuleListLayout = {
  moduleConfig?: any;
  //controls
  disableHeader?: boolean;
  hideView?: boolean;
  //search
  serverSearch?: boolean;

  //table
  tableprops?: any;
  columns?: any[];
  forceData?: any;
  children: ReactNode;
} & DataTable &
  ExtraContent &
  PropHeader &
  PropModalFormHandler;

export type PropModuleListLayoutHeader = PropHeader & {
  hasModalForms?: boolean;
  moduleConfig?: any;
  columns?: any[];
  //extra
  handlersFormModal?: any;
};
