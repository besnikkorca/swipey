import Text from 'components/theme/atoms/text/Text'
import Title from 'components/theme/atoms/text/Title'
import { Divider, HStack, View } from 'native-base'
import { Job } from 'types/employee'

type Props = {
  job: Job
}

export default function JobDetails({ job }: Props) {
  const initialText = job.description.split('\n')

  return (
    <View p="4">
      <Title color="white" fontSize="2xl" my="4">
        Position: {job.position}
      </Title>
      <Divider my="2" />
      <HStack justifyContent="space-between" mb="4">
        <Text>{job.companyName}</Text>
        <Text>
          {job.startDate} - {job.endDate}
        </Text>
      </HStack>
      {initialText.map((line) => (
        <Text key={line} textAlign="left">
          {line}
        </Text>
      ))}
    </View>
  )
}
