// react
import { FocusEvent, ChangeEvent } from "react";

// formik
import { FormikErrors } from "formik";

// shared
import { IRegistrValueForm } from "@/shared/types/IRegistrValueForm";

export interface IRegistrInputsListProps {
  errors: FormikErrors<IRegistrValueForm<string>>;
  value: IRegistrValueForm<string>;
  touched: Partial<IRegistrValueForm<boolean | undefined>>;
  onBlur: (e: FocusEvent<any, Element>) => void;
  handleChange: (e: ChangeEvent<any>) => void;
}
