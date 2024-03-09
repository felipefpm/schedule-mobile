
import { Dimensions, TouchableOpacityProps } from 'react-native'

import { StyledItemHabitDay } from './styles'

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps extends TouchableOpacityProps {}

export function HabitDay({ ...rest }: TouchableOpacityProps) {
  return (
    <>
      <StyledItemHabitDay
        style={{ width: 40, height: 40 }}
        activeOpacity={0.7}
        {...rest}
      />
    </>
  )
}