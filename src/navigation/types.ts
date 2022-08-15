export enum SignUpScreens {
  signUpEmail = "signUpUser",
  signUpFirstName = "signUpFirstName",
  signUpLastName = "signUpLastName",
  signUpCV = "signUpCV",
  signUpPassword = "signUpPassword",
  signUpPerform = "signUpPerform",
  rules = "rules",
  signUpRecruiter = "signUpRecruiter",
}

export enum AuthScreens {
  initial = "initial",
  login = "login",
}

export enum AppScreens {
  home = "home",
  about = "about",
}

export type ScreenNames = AppScreens | AuthScreens | SignUpScreens;
