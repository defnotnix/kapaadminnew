import {
  FormShowcase,
  formProps as formPropsShowcase,
} from "./forms/showcase/form";
import {
  _Form as FormTextDetails,
  formProps as formPropsTextDetails,
} from "./forms/text-content/form";

export const _cmsEventsAboutHistoryForms = [
  {
    header: "Introduction Text Contents",
    module: FormTextDetails,
    id: 41,
    config: formPropsTextDetails,
  },
  {
    header: "Image Showcase-1",
    module: FormShowcase,
    id: 42,
    config: formPropsShowcase,
  },
  {
    header: "Image Showcase-2",
    module: FormShowcase,
    id: 43,
    config: formPropsShowcase,
  },
  // {
  //   header: "Image Showcase-3",
  //   modul: FormShowcase,
  //   id: 37,
  //   config: formPropsShowcase,
  // },
];
