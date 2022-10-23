import PrimaryButton from 'components/Form/buttons/PrimaryButton'
import InputUnderline from 'components/Form/inputs/InputUnderline'
import Title from 'components/theme/atoms/text/Title'
import NavigateBackButton from 'components/theme/molecules/NavigateBackButton'
import DocumentUploadScreen from 'components/theme/organisms/DocumentUploadScreen'
import useAddJobForm from 'hooks/forms/useAddJobForm'
import { HStack, ScrollView, VStack } from 'native-base'
import ScreenWrapper from 'screens/ScreenWrapper'
import { ValidationRules } from 'types/form'
import { themeModeColorsBAW } from '_constants/theme'
import useCreateJobPost from './hooks/useCreateJobpost'
import rules from './rules.json'

export default function AddJobScreen() {
  const { control, handleSubmit, formState } = useAddJobForm()
  const createJobPost = useCreateJobPost()
  const titleError = (formState.errors?.title?.message || '') as string
  const descriptionError = (formState.errors?.description?.message ||
    '') as string
  const filesErrors = (formState.errors?.files?.message || '') as string

  return (
    <ScreenWrapper safeArea={false} themeColors={themeModeColorsBAW}>
      <HStack>
        <NavigateBackButton />
        <Title>Build your job post</Title>
      </HStack>
      <ScrollView>
        <VStack p="10">
          <InputUnderline
            autoFocus
            placeholder="Job Title"
            fieldName="title"
            control={control}
            error={titleError}
            rules={rules.title}
            autoCapitalize="none"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
          />
          <InputUnderline
            autoFocus
            placeholder="Job description"
            fieldName="description"
            color="black"
            control={control}
            error={descriptionError}
            rules={rules.description}
            autoCapitalize="none"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
          />
          <DocumentUploadScreen
            mx={0}
            // TODO: onUpload needs to check if the upload
            // was successful before allowing the submission of this form
            // onUpload={handleSubmit(handleUpdate)}
            fieldName="files"
            buttonText="Upload"
            control={control}
            rules={rules.files as ValidationRules}
            error={filesErrors}
            // titleText="Pictures about the company, projects"
            subText="Pictures about the company or the job"
          />
          <PrimaryButton
            isValid={formState.isValid}
            onPress={handleSubmit(createJobPost)}
          >
            Create
          </PrimaryButton>
        </VStack>
      </ScrollView>
    </ScreenWrapper>
  )
}
