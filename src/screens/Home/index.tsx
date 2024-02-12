import { View, Text } from 'react-native';

import { HabitDay } from "../../components/HabitDay";
import { Header } from "../../components/Header";

import { 
  StyledTextWeekDay, 
  StyledViewContainer, 
  StyledViewContent 
} from './styles'

const weekDays = [
  'D',
  'S',
  'T',
  'Q',
  'Q',
  'S',
  'S',
]

export function Home() {
  return (
    <StyledViewContainer>
      <Header />
      <StyledViewContent>
        {weekDays.map((day, index) => (
          <StyledTextWeekDay key={`${day}-${index}`}>
            {day}
          </StyledTextWeekDay>
        ))}
      </StyledViewContent>
      <HabitDay />
    </StyledViewContainer>
  )
}