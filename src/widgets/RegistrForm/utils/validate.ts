import * as Yup from "yup";

export const validate = () => {
  const requiredFilling = "* Поле обязательно для заполнения";

  return Yup.object({
    firstName: Yup.string()
      .max(20, "Должно быть 20 символов или меньше")
      .required(requiredFilling)
      .trim(),
    lastName: Yup.string()
      .max(25, "Должно быть 25 символов или меньше")
      .required(requiredFilling)
      .trim(),
    phone: Yup.string()
      .matches(
        /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
        "Номер начинается с 8 или +7"
      )
      .required(requiredFilling)
      .trim(),
    email: Yup.string()
      .email("Invalid email address")
      .required(requiredFilling)
      .trim(),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Your password is too short.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });
};
