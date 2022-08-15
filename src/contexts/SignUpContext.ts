import { createContext } from "react";
import { signUpInitialValues } from "../constants/signUp";
import { SignUpData } from "../types/signUp";

type ContextData = {
  data: SignUpData;
  onChange: (type: string) => (payload: string) => void;
};

export default createContext<ContextData>({
  data: { ...signUpInitialValues },
  onChange: () => () => {},
});
