import {
  _Form as FormMainCard,
  formProps as formPropsMainCard,
} from "./forms/maincard/form";
import {
  _Form as FormTextContent,
  formProps as formPropsTextContent,
} from "./forms/text-content/form";

export const _cmsCelebrationsAboutPhaseForms = [
  {
    header: "Phase - Text Contents",
    module: FormTextContent,
    id: 29,
    config: formPropsTextContent,
  },
  {
    header: "Phase 1 : Pre-Event",
    module: FormMainCard,
    id: 30,
    config: formPropsMainCard,
  },
  {
    header: "Phase 2 : During-Event",
    module: FormMainCard,
    id: 31,
    config: formPropsMainCard,
  },
  {
    header: "Phase 3 : Post-Event",
    module: FormMainCard,
    id: 32,
    config: formPropsMainCard,
  },
];
