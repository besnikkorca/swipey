import Text from 'components/theme/atoms/text/Text'
import Title from 'components/theme/atoms/text/Title'
import { Divider, HStack, View } from 'native-base'
import { JobPostingJob } from 'types/jobposting'

type Props = {
  job: JobPostingJob
}

export default function JobOfferDetails({ job }: Props) {
  const initialText = job.description.split('\n')

  return (
    <View p="4">
      <Title color="white" fontSize="2xl" my="4">
        Position: {job.position}
      </Title>
      <Divider my="2" />
      <HStack justifyContent="space-between" mb="4">
        <Text>{job.companyName}</Text>
        <Text>Posted on: {job.postedOn}</Text>
      </HStack>
      {initialText.map((line) => (
        <Text key={line} textAlign="left">
          {line}
        </Text>
      ))}
    </View>
  )
}
