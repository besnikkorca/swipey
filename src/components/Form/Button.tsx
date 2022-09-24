import React from 'react'
import { Button as NBButton, IButtonProps } from 'native-base'

export default function Button({
  onPress,
  children,
  variant,
}: IButtonProps): JSX.Element {
  return (
    <NBButton
      textTransform="uppercase"
      onPress={onPress}
      variant={variant}
      mx="4"
      my="2"
      borderRadius={50}
    >
      {children}
    </NBButton>
  )
}
