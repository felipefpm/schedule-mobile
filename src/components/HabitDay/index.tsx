
import { Dimensions } from 'react-native'

import { StyledItemHabitDay } from './styles'

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;
export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

export function HabitDay() {
  return (
    <>
      <StyledItemHabitDay
        style={{ width: 40, height: 40 }}
      />
    </>
  )
}