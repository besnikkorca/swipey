export default function isValidPassword(password: string): boolean | string {
  const isValid = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/.test(password)
  if (!isValid)
    return 'Password must contain at least one number and one letter'

  return isValid
}
