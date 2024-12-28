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

import { _cmsCelebrationsAboutIntroForms } from "./form/intro";
import { _cmsCelebrationsAboutHistoryForms } from "./form/history";
import { _cmsCelebrationsAboutExecutionForms } from "./form/execution";
import { _cmsCelebrationsAboutPhaseForms } from "./form/phase";

export const cmsComponents = [
  {
    icon: Flag,
    label: "About Intro Content",
    description: "The starting paragraph/image of the about page.",
    components: _cmsCelebrationsAboutIntroForms,
  },
  {
    icon: Clock,
    label: "Organization History",
    description: "The story behind the organization.",
    components: _cmsCelebrationsAboutHistoryForms,
  },
  {
    icon: Play,
    label: "Execution Brief",
    description: "Brief on how events are executed.",
    components: _cmsCelebrationsAboutExecutionForms,
  },
  {
    icon: StackSimple,
    label: "Phase Brief Details",
    description: "Brief on the phases of ecent execution.",
    components: _cmsCelebrationsAboutPhaseForms,
  },
];
