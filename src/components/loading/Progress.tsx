import React from 'react'
import { Progress as NBProgress } from 'native-base'
import { ColorSchemeType } from 'native-base/lib/typescript/components/types'

type Props = {
  colorScheme?: ColorSchemeType
  loadPercentage?: number
  isVisible?: boolean
}

export default function Progress({
  loadPercentage = 0,
  colorScheme = 'emerald',
  isVisible = true,
}: Props): JSX.Element | null {
  if (!isVisible) return null

  return <NBProgress my="2" colorScheme={colorScheme} value={loadPercentage} />
}
