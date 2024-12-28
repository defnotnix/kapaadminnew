import {
  FormShowcase,
  formProps as formPropsShowcase,
} from "./forms/showcase/form";
import {
  _Form as FormTextDetails,
  formProps as formPropsTextDetails,
} from "./forms/text-content/form";

export const _cmsCelebrationsAboutHistoryForms = [
  {
    header: "Introduction Text Contents",
    module: FormTextDetails,
    id: 24,
    config: formPropsTextDetails,
  },
  {
    header: "Image Showcase-1",
    module: FormShowcase,
    id: 25,
    config: formPropsShowcase,
  },
  {
    header: "Image Showcase-2",
    module: FormShowcase,
    id: 26,
    config: formPropsShowcase,
  },
  {
    header: "Image Showcase-3",
    module: FormShowcase,
    id: 27,
    config: formPropsShowcase,
  },
];
