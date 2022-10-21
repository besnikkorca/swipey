import ScreenWrapper from '../ScreenWrapper'
import { themeModeColorsBAW } from '_constants/theme'
import EmployeesDeckSwiper from 'components/theme/molecules/EmployeesDeckSwiper'

export default function SwipeEmployeesScreen(): JSX.Element {
  return (
    <ScreenWrapper safeArea={false} themeColors={themeModeColorsBAW}>
      <EmployeesDeckSwiper />
    </ScreenWrapper>
  )
}
