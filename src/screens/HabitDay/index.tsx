import { Alert, ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';
import dayjs from "dayjs";

import { StyledTextDatePast, StyledTextDayAndMonth, StyledTextWeekDay, StyledViewCheckBoxHabits, StyledViewContainerHabit } from "./styles";
import { api } from "../../lib/axios";
import { generateProgressBar } from '../../utils/generate-progressbar'

import { BackButton } from "../../components/BackButton";
import { ProgressBar } from "../../components/ProgressBar";
import { CheckBox } from "../../components/CheckBox";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { EmptyHabits } from "../../components/EmptyHabit";

interface HabitProps {
  date: string
}

interface DayInfoProps {
  completedHabits: string[]
  possibleHabits: {
    id: string
    title: string
  }[]
}


export function HabitDay() {
  const route = useRoute()
  const [loading, setLoading] = useState<boolean>(true)
  const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null)
  const [completedHabits, setCompletedHabits] = useState<string[]>([])
  const { date } = route.params as HabitProps;

  const parsedDate = dayjs(date)
  const isDateInPast = parsedDate.endOf('day').isBefore(new Date())
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')

  const habitsProgress = dayInfo?.possibleHabits.length 
    ? generateProgressBar(dayInfo?.possibleHabits?.length, completedHabits.length) 
    : 0

  async function fetchHabits() {
    try {
      setLoading(true)

      const response = await api.get('/day', { 
        params: {date}
      })

      setDayInfo(response.data)
      setCompletedHabits(response.data.completedHabits)
      
    } catch (error) {
      console.error('Erro: ', error)
      Alert.alert('Erro de requisição', `${error}`)
    } finally {
      setLoading(false)
    }
  }

  async function handleCheckHabit(habitId: string) {

    try {

      await api.patch(`/habits/${habitId}/toggle`)

      if (completedHabits.includes(habitId)) {
        setCompletedHabits(prevState => prevState.filter(habit => habit !== habitId))
      } else {
        setCompletedHabits(prevState => [...prevState, habitId])
      }
      
    } catch (error) {
      console.error('Error: ', error)
      Alert.alert('Erro de envio', `Erro ao salvar suas alterações tente novamente: ${error}`)
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }
  
  return(
    <StyledViewContainerHabit>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <BackButton />

        <StyledTextWeekDay>
          {dayOfWeek}
        </StyledTextWeekDay>

        <StyledTextDayAndMonth>
          {dayAndMonth}
        </StyledTextDayAndMonth>

        <ProgressBar progress={habitsProgress} />

        <StyledViewCheckBoxHabits>
          {
            dayInfo?.possibleHabits ? 
              dayInfo?.possibleHabits?.map(habit => (
                <CheckBox 
                  key={habit.id}
                  title={habit.title}
                  checked={completedHabits.includes(habit.id)}
                  disabled={isDateInPast}
                  onPress={() => handleCheckHabit(habit.id)}
                />
              )) 
            : <EmptyHabits />
          }
        </StyledViewCheckBoxHabits>

        {
          isDateInPast && (
            <StyledTextDatePast>
              Você não pode atualizar hábitos de datas anteriores.
            </StyledTextDatePast>
          )
        }

      </ScrollView>
    </StyledViewContainerHabit>
  )
}