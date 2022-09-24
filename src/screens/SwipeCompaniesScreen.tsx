import ScreenWrapper from './ScreenWrapper'
import DeckSwiper from 'components/theme/molecules/DeckSwiper'
import { themeModeColorsBAW } from '_constants/theme'

export default function SwipeCompaniesScreen(): JSX.Element {
  return (
    <ScreenWrapper safeArea={false} themeColors={themeModeColorsBAW}>
      <DeckSwiper />
    </ScreenWrapper>
  )
}
