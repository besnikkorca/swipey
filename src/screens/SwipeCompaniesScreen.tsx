import ScreenWrapper from './ScreenWrapper'
import { themeModeColorsBAW } from '_constants/theme'
import JobsDeckSwiper from 'components/theme/molecules/JobsDeckSwiper'

export default function SwipeCompaniesScreen(): JSX.Element {
  return (
    <ScreenWrapper safeArea={false} themeColors={themeModeColorsBAW}>
      <JobsDeckSwiper />
    </ScreenWrapper>
  )
}
