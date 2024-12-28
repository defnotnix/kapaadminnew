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
import { _cmsEventsHomeBrandForms } from "./form/brands";

export const cmsComponents = [
  {
    icon: Flag,
    label: "Hero Features",
    description: "Main features highlighted in the hero section of the page.",
    components: _cmsCelebrationsHomeHeroForms,
  },
  {
    icon: TextColumns,
    label: "Companies worked for",
    description: "Highlight notable brands we have worked for.",
    components: _cmsEventsHomeBrandForms,
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
    label: "Box-Showcase Section",
    description:
      "Showcase different aspects of the event and its theme.",
    components: _cmsCelebrationsHomePhaseForms,
  },

  {
    icon: StackSimple,
    label: "End Notes",
    description: "Concluding remarks or summaries at the end of the content.",
    components: _cmsCelebrationsHomeEndNoteForms,
  },
];
