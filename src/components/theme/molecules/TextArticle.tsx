import Text from 'components/theme/atoms/text/Text'
import Title from 'components/theme/atoms/text/Title'
import Icon from 'components/theme/atoms/Icon'
import { Box } from 'native-base'

interface Props {
  title: string
  content: string
}

export default function TextArticle({ title, content }: Props) {
  return (
    <Box my="5">
      <Box flexDirection="row" alignItems="center" mb="2">
        <Icon size="md" fontWeight={700} name="check" color="yellow.400" />
        <Title ml="2" fontSize="xl" color="gray.700" fontWeight="medium">
          {title}
        </Title>
      </Box>
      <Text color="gray.500" textAlign="left">
        {content}
      </Text>
    </Box>
  )
}
