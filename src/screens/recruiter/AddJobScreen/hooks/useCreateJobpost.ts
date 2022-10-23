import { AddJobForm } from 'hooks/forms/useAddJobForm'
import useNavigation from 'hooks/useNavigation'
import useUserData from 'hooks/useUserData'
import { AppScreens } from 'navigation/types'
import DBManager from 'services/DBManager'
import { Collections } from 'types/database'

export default function useCreateJobPost() {
  const { user } = useUserData()
  const navigation = useNavigation()
  return async (data: AddJobForm) => {
    if (!user) throw Error('Need to be signed in to create a job post')
    await DBManager.addDoc(Collections.users, user.uid, {
      firstName: data.title,
      lastName: data.description,
      files: data.files,
    })

    navigation.navigate(AppScreens.jobPosting)
  }
}
