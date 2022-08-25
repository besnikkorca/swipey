import { WebView } from 'react-native-webview'
import { View, IScrollViewProps } from 'native-base'

type Props = {
  url: string
} & IScrollViewProps

export default function ({ url, ...props }: Props) {
  return (
    <View {...props} flex={1} backgroundColor="green.400">
      <WebView javaScriptEnabled={true} source={{ uri: url }} />
    </View>
  )
}
