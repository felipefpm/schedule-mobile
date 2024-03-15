
import { Dimensions, TouchableOpacityProps } from 'react-native'

import { StyledItemHabitDay } from './styles'
import { generateProgressBar } from '../../utils/generate-progressbar';
import dayjs from 'dayjs';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps extends TouchableOpacityProps {
  amountOfHabits?: number
  amountCompleted?: number
  date: Date
}

export function HabitDay({ 
  amountOfHabits = 0, 
  amountCompleted = 0,
  date,
  ...rest
}: HabitDayProps) {

  const amountProgressBar = amountOfHabits > 0 ? 
    generateProgressBar(amountOfHabits, amountCompleted) : 0
  
  const toDay = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(toDay)

  return (
    <>
      <StyledItemHabitDay
        backgroundType={amountProgressBar}
        currentDay={isCurrentDay}
        style={{ width: 40, height: 40 }}
        activeOpacity={0.7}
        {...rest}
      />
    </>
  )
}