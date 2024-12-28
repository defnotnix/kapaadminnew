import {
  _Form as FormShowcase1,
  formProps as formPropsShowcase1,
} from "./forms/showcase/form";
import {
  _Form as FormTextDetails,
  formProps as formPropsTextDetails,
} from "./forms/text-content/form";

export const _cmsCelebrationsHomeHeroForms = [
  {
    header: "Event Hero-Showcase 1",
    module: FormShowcase1,
    id: 10,
    config: formPropsShowcase1,
  },
  {
    header: "Event Hero-Showcase 2",
    module: FormShowcase1,
    id: 11,
    config: formPropsShowcase1,
  },
  {
    header: "Event Hero-Showcase 3",
    module: FormShowcase1,
    id: 12,
    config: formPropsShowcase1,
  },
  {
    header: "Event Hero-Showcase 4",
    module: FormShowcase1,
    id: 13,
    config: formPropsShowcase1,
  },
  {
    header: "Hero Text Contents",
    module: FormTextDetails,
    id: 14,
    config: formPropsTextDetails,
  },
];
