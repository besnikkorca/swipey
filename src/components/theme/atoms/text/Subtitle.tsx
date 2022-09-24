import React from 'react'
import { Text } from 'native-base'
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types'

export default function Subtitle({
  children,
  fontWeight = 'medium',
  color = 'gray.400',
  fontSize = 'md',
  textAlign = 'center',
  mb = '5',
  ...props
}: InterfaceTextProps): JSX.Element {
  return (
    <Text
      {...props}
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      fontWeight={fontWeight}
      mb={mb}
    >
      {children}
    </Text>
  )
}
