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
    const { image, ...rest } = formdata;

    return {
      ...(image instanceof File ? { image } : {}),
      ...rest,
      text: JSON.stringify({
        detailed_tagline: formdata.detailed_tagline,
        detailed_quote: formdata.detailed_quote,
        detailed_services: formdata.detailed_services,
        description: formdata.description,
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
