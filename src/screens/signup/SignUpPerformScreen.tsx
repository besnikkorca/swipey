import React, { useEffect, useState } from 'react'
import useSignUpData from 'hooks/useSignUpData'
import SessionManager from 'services/SessionManager'
import { Box } from 'native-base'
import { themeModeColorsBAW } from '_constants/theme'
import ScreenWrapper from '../ScreenWrapper'
import Title from 'components/theme/atoms/text/Title'
import Subtitle from 'components/theme/atoms/text/Subtitle'
import BrandIconSimpleSmall from 'components/theme/atoms/icons/BrandIconSimpleSmall'
import DBManager from 'services/DBManager'
import { Collections } from 'types/database'
import { signUpInitialValues } from '_constants/signUp'
import Lottie from 'lottie-react-native'
import useRoute from 'hooks/useRoute'

export default function SignUpPerformScreen() {
  const {
    params: { isRecruiter = false },
  } = useRoute()

  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingAnimationDone, setIsLoadingAnimationDone] = useState(false)
  const { handleUpdate } = useSignUpData()

  const { data } = useSignUpData()

  useEffect(() => {
    const signUpUser = async () => {
      setIsLoading(true)
      const { user } = await SessionManager.signUp(data.email, data.password)

      await user.updateProfile({
        displayName: `${data.firstName} ${data.lastName}`,
      })

      // store additional user data in users collection
      await DBManager.addDoc(Collections.users, user.uid, {
        firstName: data.firstName,
        lastName: data.lastName,
        cvPath: data.cvPath,
        isRecruiter,
      })
      setIsLoading(false)
      setTimeout(() => {
        handleUpdate({
          ...signUpInitialValues,
        })
      }, 1000)
    }
    signUpUser()
  }, [])

  return (
    <ScreenWrapper
      safeArea={true}
      safeAreaBottom={true}
      themeColors={themeModeColorsBAW}
    >
      <Box flex={1} mx="10">
        <Box flex={1} mt="10">
          <BrandIconSimpleSmall />
          <Box flex={1}>
            <Title fontSize="2xl" textAlign="center" my="4">
              Time to Swipe
            </Title>
            <Subtitle color="gray.400" fontSize="md" textAlign="center" mb="5">
              All that's left to do is swipe if you see a job that you like.
            </Subtitle>
            <Box flex={1} alignItems="center">
              <Lottie
                loop={false}
                autoPlay
                onAnimationFinish={() => {
                  setIsLoadingAnimationDone(true)
                }}
                source={
                  isLoading || !isLoadingAnimationDone
                    ? require('assets/animations/lottie/loading.json')
                    : require('assets/animations/lottie/success.json')
                }
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ScreenWrapper>
  )
}
