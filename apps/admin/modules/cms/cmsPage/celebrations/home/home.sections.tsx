import { FormHandler } from "@vsphere/core";

import { getRecords, editRecord } from "@/modules/cms/config/module.api";

import {
  CardsThree,
  Flag,
  StackSimple,
  Star,
  TextColumns,
} from "@phosphor-icons/react";

//forms
import { _cmsCelebrationsHomeHeroForms } from "./form/hero";
import { _cmsCelebrationsHomeIntroForms } from "./form/intro";
import { _cmsCelebrationsHomePhaseForms } from "./form/phase";
import { _cmsCelebrationsHomeEndNoteForms } from "./form/end-note";

export const cmsComponents = [
  {
    icon: Flag,
    label: "Hero Features",
    description: "Main features highlighted in the hero section of the page.",
    components: _cmsCelebrationsHomeHeroForms,
  },
  {
    icon: TextColumns,
    label: "Introduction",
    description:
      "Introductory section that sets the tone for the page or content.",
    components: _cmsCelebrationsHomeIntroForms,
  },
  {
    icon: CardsThree,
    label: "Phase",
    description:
      "Represents different phases or stages of the content or process.",
    components: _cmsCelebrationsHomePhaseForms,
  },

  {
    icon: StackSimple,
    label: "End Notes",
    description: "Concluding remarks or summaries at the end of the content.",
    components: _cmsCelebrationsHomeEndNoteForms,
  },
];
