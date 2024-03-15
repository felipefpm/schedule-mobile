import { useState } from "react";
import { Alert, ScrollView } from "react-native";
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
import { api } from "../../lib/axios";

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
  const [title, setTitle] = useState('')
  
  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  async function handleCreateNewHabit() {
    
    try {
      if (!title.trim() || weekDays.length === 0) {
        Alert.alert('Novo Hábito','Informe o nome do hábito e os dias.')
      }

      await api.post('/habits', {title, weekDays})

      setTitle('')
      setWeekDays([])

      Alert.alert('Novo Hábito', 'Hábto criado com sucesso!')
    } catch (error) {
      console.log(error)
      Alert.alert('Ops...', 'Não foi possivel criar o novo hábito.')
    }
  }

  return(
    <StyledViewContainerNewHabit>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom: 1e00}}
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
          onChangeText={setTitle}
          value={title}
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

        <StyledTouchableOpacityConfirmButton onPress={handleCreateNewHabit} activeOpacity={0.7}>
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