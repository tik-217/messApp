import * as Yup from "yup";

export const validate = () => {
  const LoginSchema = Yup.object({
    emailOrPhone: Yup.string()
      .trim()
      .required("Поле обязательно для заполнения")
      .test("email_or_phone", "Email или телефон некорректны", (value) => {
        return validateEmail(value) || validatePhone(parseInt(value ?? "0"));
      }),
  });

  const validateEmail = (email: string | undefined) => {
    return Yup.string().email().isValidSync(email);
  };

  const validatePhone = (phone: number | undefined) => {
    return Yup.number()
      .integer()
      .positive()
      .test((phone) => {
        const reg = new RegExp(
          /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
        );

        return phone && reg.test(phone.toString()) ? true : false;
      })
      .isValidSync(phone);
  };

  return LoginSchema;
};
