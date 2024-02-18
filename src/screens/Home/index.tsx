import { generateDates } from '../../utils/generate-dates';

import { HabitDay } from "../../components/HabitDay";
import { Header } from "../../components/Header";

import { 
  StyledItemHabitDayDisabled,
  StyledTextWeekDay, 
  StyledViewContainer, 
  StyledViewWeekDaysBody, 
  StyledViewWeekDaysHeader 
} from './styles'
import { ScrollView } from 'react-native';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateDates();
const minimumDateSizes = 18 * 5;
const amountOfDaysToFill = minimumDateSizes - datesFromYearStart.length

export function Home() {
  return (
    <StyledViewContainer>
      <Header />
      <StyledViewWeekDaysHeader>
        {weekDays.map((day, index) => (
          <StyledTextWeekDay key={`${day}-${index}`}>
            {day}
          </StyledTextWeekDay>
        ))}
      </StyledViewWeekDaysHeader>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
      >
        <StyledViewWeekDaysBody>
          {
            datesFromYearStart.map(date => (
              <HabitDay key={date.toISOString()} />
            ))
          }

          {
            amountOfDaysToFill > 0 && Array
              .from({length: amountOfDaysToFill})
              .map((_, index) => (
                <StyledItemHabitDayDisabled
                  style={{ width: 40, height: 40 }}
                />
              ))
          }
        </StyledViewWeekDaysBody>
      </ScrollView>
    </StyledViewContainer>
  )
}