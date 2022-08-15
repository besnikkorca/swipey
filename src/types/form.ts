import { Control, RegisterOptions } from "react-hook-form";

export type FormInputProps = {
  fieldName: string;
  control: Control;
  rules: RegisterOptions;
  error: string;
};

export type ValidationRules = RegisterOptions;
