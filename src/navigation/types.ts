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

export enum TabsScreens {
  swipeCompanies = 'swipeCompanies',
  likedByCompanies = 'likedByCompanies',
  matchedCompanies = 'matchedCompanies',
  swipeEmployees = 'swipeEmployees',
}

export type ScreenNames = AuthScreens | SignUpScreens
