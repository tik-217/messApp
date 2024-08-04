import { FocusEvent, ChangeEvent } from "react";

export interface IAuthrInput {
  type: string;
  placeholder: string;
  name: string;
  errorType: string | undefined;
  touched: boolean | undefined;
  value: string;
  onBlur: (e: FocusEvent<any, Element>) => void;
  handleChange: (e: ChangeEvent<any>) => void;
}
