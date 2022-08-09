import React from "react";
import { Progress } from "native-base";
import { ColorSchemeType } from "native-base/lib/typescript/components/types";

type Props = {
  colorScheme?: ColorSchemeType;
  loadPercentage?: number;
  isVisible?: boolean;
};

export default function ({
  loadPercentage = 0,
  colorScheme = "emerald",
  isVisible = true,
}: Props): JSX.Element | null {
  if (!isVisible) return null;

  return <Progress my="2" colorScheme={colorScheme} value={loadPercentage} />;
}
