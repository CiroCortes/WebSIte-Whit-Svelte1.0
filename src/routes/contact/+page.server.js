
import { object, string, number, date, InferType } from "yup";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    let contacFormSchema = object({
      name: string().min(2, "too short").required("we only accept named users"),
      email: string().email().required(),
      website: string().url().nullable(),
      message: string().required(),
    });

    //hacer algo con los datos rescatados del formulario

    try {
      const result = await contacFormSchema.validate({ name, email, message },
        {abortEarly :false}
        );
      console.log(result);
      return {
        success: true,
  
        status: "Form is submited",
      };
    } catch (error) {
      console.log(error);
      const errors = error.inner.reduce((acc, err)=>{
        return { ...acc, [err.path]: err.message};

      },{});

      return{
        errors,
        name,
        email,
        message,
      };
    }

    
  },
};
