import { useState } from "react";
import { ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons'

import { 
  StyledViewContainerNewHabit,
  StyledTextBase, 
  StyledTextTitle,
  StyledTextInput,
  StyledTouchableOpacityConfirmButton,
  StyledTextButton
} from "./styles";
import { CheckBox } from "../../components/CheckBox";
import { BackButton } from "../../components/BackButton";

const avaliableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sabádo'
]


export function NewHabits() {
  const [weekDays, setWeekDays] = useState<number[]>([])
  
  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  return(
    <StyledViewContainerNewHabit>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom: 100}}
      >

        <BackButton />

        <StyledTextTitle>
          Criar hábito
        </StyledTextTitle>

        <StyledTextBase>
          Qual seu comprometimento?
        </StyledTextBase>

        <StyledTextInput 
          placeholder="Ex.: Exercícios, dormir bem, etc..." 
          placeholderTextColor="#fff"
        />

        <StyledTextBase>
          Qual a recorrência?
        </StyledTextBase>

        {
          avaliableWeekDays.map((weekDay, index) => (
            <CheckBox 
              key={weekDay} 
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          ))
        }

        <StyledTouchableOpacityConfirmButton activeOpacity={0.7}>
          <Feather 
            name="check"
            size={20}
            color="#fff"
          />
          <StyledTextButton>
            Confirmar
          </StyledTextButton>
        </StyledTouchableOpacityConfirmButton>

      </ScrollView>
    </StyledViewContainerNewHabit>
  )
}