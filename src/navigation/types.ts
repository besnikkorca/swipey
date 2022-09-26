export enum SignUpScreens {
  signUpEmail = 'signUpUser',
  signUpFirstName = 'signUpFirstName',
  signUpLastName = 'signUpLastName',
  signUpCV = 'signUpCV',
  signUpPassword = 'signUpPassword',
  signUpPerform = 'signUpPerform',
  signUpCompanyName = 'signUpCompanyName',
  rules = 'rules',
}

export enum AuthScreens {
  initial = 'initial',
  login = 'login',
}

export enum AppScreens {
  home = 'home',
  about = 'about',
}

export enum TabsScreens {
  swipeCompanies = 'swipeCompanies',
  likedByCompanies = 'likedByCompanies',
  matchedCompanies = 'matchedCompanies',
}

export type ScreenNames = AppScreens | AuthScreens | SignUpScreens
