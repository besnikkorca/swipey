import { useForm, UseFormProps } from "react-hook-form";

const defaultValues = {
  email: "",
  firstName: "",
  lastName: "",
};

const formConfig: UseFormProps = {
  defaultValues,
  mode: "onChange",
  reValidateMode: "onBlur",
};

export default function () {
  const formData = useForm(formConfig);

  const onSubmit = (data: any) => {
    console.log("data - ", data);
    alert("submitting data");
  };

  return formData;
}
