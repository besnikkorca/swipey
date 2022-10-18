import { createContext } from 'react'
import { UserContextType } from 'types/user'

export default createContext<UserContextType>({
  user: null,
  userDetails: undefined,
  initializing: true,
})
