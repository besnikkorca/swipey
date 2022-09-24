import { useContext } from 'react'
import { UserContextType } from 'types/user'
import UserContext from 'contexts/UserContext'

export default function useUserData(): UserContextType {
  return useContext(UserContext)
}
