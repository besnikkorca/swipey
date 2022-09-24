import { Link as NBLink } from 'native-base'
import { InterfaceLinkProps } from 'native-base/lib/typescript/components/primitives/Link/types'

export default function Link({ children, href, ...props }: InterfaceLinkProps) {
  return (
    <NBLink
      _text={{
        color: 'white',
        fontWeight: 'semibold',
      }}
      onPress={() => alert('would have opened site ' + href)}
      {...props}
    >
      {children}
    </NBLink>
  )
}
