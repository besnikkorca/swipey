import React, { useCallback, useReducer } from "react";
import SignUpContext from "contexts/SignUpContext";
import { signUpInitialValues } from "_constants/signUp";

type Props = {
  children: React.ReactChild;
};

function reducer(state: any, action: any) {
  return {
    ...state,
    [action.type]: action.payload,
  };
}

export default function ({ children }: Props): JSX.Element {
  const [state, dispatch] = useReducer(reducer, { ...signUpInitialValues });

  const onChange = useCallback(
    (type: string) => (payload: string) => dispatch({ type, payload }),
    [dispatch]
  );

  return (
    <SignUpContext.Provider value={{ data: state, onChange }}>
      {children}
    </SignUpContext.Provider>
  );
}
