import {
  _Form as FormMainCard,
  formProps as formPropsMainCard,
} from "./forms/maincard/form";
import {
  _Form as FormTextDetails,
  formProps as formPropsTextDetails,
} from "./forms/details-card/form";

export const _cmsCelebrationsHomePhaseForms = [
  {
    header: "Section-1 : Content-Details",
    module: FormTextDetails,
    id: 55,
    config: formPropsTextDetails,
  },
  {
    header: "Section-1 : Large Showcase",
    module: FormMainCard,
    id: 56,
    config: formPropsMainCard,
  },
  {
    header: "Section-1 : Small Showcase - Top",
    module: FormMainCard,
    id: 57,
    config: formPropsMainCard,
  },
  {
    header: "Section-1 : Small Showcase - Bottom",
    module: FormMainCard,
    id: 58,
    config: formPropsMainCard,
  },
  {
    header: "Section-2 : Content-Details",
    module: FormTextDetails,
    id: 59,
    config: formPropsTextDetails,
  },
  {
    header: "Section-2 : Large Showcase",
    module: FormMainCard,
    id: 60,
    config: formPropsMainCard,
  },
  {
    header: "Section-2 : Small Showcase - Top",
    module: FormMainCard,
    id: 61,
    config: formPropsMainCard,
  },
  {
    header: "Section-2 : Small Showcase - Bottom",
    module: FormMainCard,
    id: 62,
    config: formPropsMainCard,
  },
];
