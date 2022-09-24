import React from 'react'
import { Text as NBText } from 'native-base'
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types'

export default function Text({
  children,
  color = 'white',
  textAlign = 'center',
  fontWeight = 'medium',
  ...props
}: InterfaceTextProps): JSX.Element {
  return (
    <NBText
      {...props}
      color={color}
      textAlign={textAlign}
      fontWeight={fontWeight}
    >
      {children}
    </NBText>
  )
}
