// services
import { formTrim } from "@/shared/services/formTrim";

// formik
import { useFormik } from "formik";

// validate
import { validate } from "../utils/validate";

export default function useFormAuth() {
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      formTrim(values);
      formik.setSubmitting(false);
    },
  });

  return formik;
}
