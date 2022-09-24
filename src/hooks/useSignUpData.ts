import SignUpContext from 'contexts/SignUpContext'
import { ScreenNames } from 'navigation/types'
import { useCallback, useContext } from 'react'
import useNavigation from './useNavigation'

export default function useSignUpData(screenName?: ScreenNames) {
  const navigation = useNavigation()
  const { data, onChange } = useContext(SignUpContext)

  const handleUpdate = useCallback(
    (data: any) => {
      const keys = Object.keys(data)

      keys.forEach((key) => onChange(key)(data[key]))

      return screenName && navigation.navigate(screenName)
    },
    [onChange, navigation.navigate, screenName]
  )

  return { data, handleUpdate }
}
