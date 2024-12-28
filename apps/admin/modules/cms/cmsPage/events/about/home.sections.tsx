import { FormHandler } from "@vsphere/core";

import { getRecords, editRecord } from "@/modules/cms/config/module.api";

import {
  CardsThree,
  Clock,
  Flag,
  Play,
  StackSimple,
  Star,
  TextColumns,
} from "@phosphor-icons/react";

//forms

import { _cmsEventsAboutIntroForms } from "./form/intro";
import { _cmsEventsAboutHistoryForms } from "./form/history";
import { _cmsEventsAboutExecutionForms } from "./form/execution";
import { _cmsEventsAboutPhaseForms } from "./form/phase";

export const cmsComponents = [
  {
    icon: Flag,
    label: "About Intro Content",
    description: "The starting paragraph/image of the about page.",
    components: _cmsEventsAboutIntroForms,
  },
  {
    icon: Clock,
    label: "Organization History",
    description: "The story behind the organization.",
    components: _cmsEventsAboutHistoryForms,
  },
  {
    icon: Play,
    label: "Execution Brief",
    description: "Brief on how events are executed.",
    components: _cmsEventsAboutExecutionForms,
  },
  {
    icon: StackSimple,
    label: "Phase Brief Details",
    description: "Brief on the phases of ecent execution.",
    components: _cmsEventsAboutPhaseForms,
  },
];
