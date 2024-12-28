export const formProps: any = {
  initial: {},

  // > STEPS
  steps: ["General Details"],
  stepType: "general",
  stepClickable: false,
  initialStep: 0,

  // > VALIDATION
  validation: [],

  // > SUBMIT
  submitFormData: true,

  transformDataOnSubmit: (formdata: any) => {
    return {
      ...formdata,
      text: JSON.stringify({
        quote1: formdata.quote1,
        quote2: formdata.quote2,
        quote3: formdata.quote3,
        quote4: formdata.quote4,
        tagline_main: formdata.tagline_main,
        detailed_tagline: formdata.detailed_tagline,
        detailed_quote: formdata.detailed_quote,
        detailed_services: formdata.detailed_services,
      }),
    };
  },

  // > API

  submitProps: {
    keyIgnore: [],
    valueIgnore: [],
    stringify: false,
  },
};
