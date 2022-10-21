import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import UserContext from '../../contexts/UserContext'
import { User, UserDetails } from 'types/user'
import DBManager from 'services/DBManager'
import { Collections } from 'types/database'

type Props = {
  children: React.ReactChild
}

export default function UserProvider({ children }: Props): JSX.Element {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState<User>(null)
  const [userDetails, setUserDetails] = useState<UserDetails | undefined>()

  async function onAuthStateChanged(user: User) {
    setUser(user)
    if (user) {
      const data = await DBManager.getDocData<UserDetails>(
        Collections.users,
        user.uid
      )
      setUserDetails(data)
    } else {
      setUserDetails(undefined)
    }
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscription = auth().onAuthStateChanged(onAuthStateChanged)

    return subscription
  }, [])

  return (
    <UserContext.Provider value={{ user, userDetails, initializing }}>
      {children}
    </UserContext.Provider>
  )
}
