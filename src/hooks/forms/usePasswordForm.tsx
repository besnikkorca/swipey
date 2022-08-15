import { useForm, UseFormProps } from "react-hook-form";

const defaultValues = {
  password: "",
};

const formConfig: UseFormProps = {
  defaultValues,
  mode: "onChange",
  reValidateMode: "onBlur",
};

export default function () {
  return useForm(formConfig);
}
