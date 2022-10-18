import { useContext } from 'react'
import { UserContextType } from 'types/user'
import UserContext from 'contexts/UserContext'

type ExtendedUserContext = UserContextType & {
  isLoggedIn: boolean
  isRecruiter: boolean
}

export default function useUserData(): ExtendedUserContext {
  const userContext = useContext(UserContext)
  return {
    ...userContext,
    isLoggedIn: !!userContext.user,
    isRecruiter: userContext.userDetails?.isRecruiter || false,
  }
}
