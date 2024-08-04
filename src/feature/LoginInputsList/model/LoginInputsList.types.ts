// react
import { FocusEvent, ChangeEvent } from "react";

// formik
import { FormikErrors } from "formik";

// shared
import { ILoginValueFrom } from "@/shared/types/LoginValueForm";

export interface ILoginInputsListProps {
  errors: FormikErrors<ILoginValueFrom<string>>;
  value: ILoginValueFrom<string>;
  touched: Partial<ILoginValueFrom<boolean | undefined>>;
  onBlur: (e: FocusEvent<any, Element>) => void;
  handleChange: (e: ChangeEvent<any>) => void;
}
