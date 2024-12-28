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
      text: JSON.stringify({
        subheading: formdata.subheading,
        heading1: formdata.heading1,
        heading2: formdata.heading2,
        heading3: formdata.heading3,
        paragraph1: formdata.paragraph1,
        paragraph2: formdata.paragraph2,
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
