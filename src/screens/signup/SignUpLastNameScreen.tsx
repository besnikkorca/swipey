import React from "react";
import { SignUpScreens } from "navigation/types";
import QuestionScreen from "components/theme/organisms/QuestionScreen";

export default function () {
  return (
    <QuestionScreen
      nextScreen={SignUpScreens.signUpLastName}
      titleText="My last name is"
      placeholder="Last Name"
    />
  );
}
