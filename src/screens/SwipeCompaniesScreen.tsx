import Text from "components/theme/atoms/text/Text";
import { Box } from "native-base";
import ScreenWrapper from "./ScreenWrapper";
import DeckSwiper from "components/theme/molecules/DeckSwiper";
import { themeModeColorsBAW } from "_constants/theme";

export default function (): JSX.Element {
  return (
    <ScreenWrapper safeArea={false} themeColors={themeModeColorsBAW}>
      {/* <Box margin="2" flex={1} backgroundColor="transparent"> */}
      <DeckSwiper />
      {/* </Box> */}
    </ScreenWrapper>
  );
}
