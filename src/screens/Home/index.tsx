import { useCallback, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { generateDates } from '../../utils/generate-dates';
import { HabitDay } from "../../components/Habit";
import { Header } from "../../components/Header";

import { api } from '../../lib/axios';

import { 
  StyledItemHabitDayDisabled,
  StyledTextWeekDay, 
  StyledViewContainer, 
  StyledViewWeekDaysBody, 
  StyledViewWeekDaysHeader 
} from './styles'
import { Loading } from '../../components/Loading';
import dayjs from 'dayjs';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateDates();
const minimumDateSizes = 18 * 5;
const amountOfDaysToFill = minimumDateSizes - datesFromYearStart.length

type summaryType = Array<{
  id: string
  date: string
  amount: number
  completed: number
}>

export function Home() {
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState<summaryType | null>(null)
  const { navigate } = useNavigation()

  async function fetchData() {
    try {

      setLoading(true)
      const response = await api.get('/summary');
      
      setSummary(response.data)

    } catch (error) {

      Alert.alert('Ops...', 'Não foi possivel carregas as informações')
      console.log(error)
    } finally {

      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))
  
  if (loading) {
    return (
      <Loading />
    )
  }

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
        {
          summary &&
          <StyledViewWeekDaysBody>
            {
              datesFromYearStart.map(date => {
                const dayWithHabits = summary.find(day => {
                  return dayjs(date).isSame(day.date, 'day')
                })

                return (
                  <HabitDay
                    date={date}
                    amountOfHabits={dayWithHabits?.amount}
                    amountCompleted={dayWithHabits?.completed}
                    key={date.toISOString()}
                    onPress={() => navigate('habitday', { date: date.toISOString() })}
                  />
                )
              })
            }

            {
              amountOfDaysToFill > 0 && Array
                .from({ length: amountOfDaysToFill })
                .map((_, index) => (
                  <StyledItemHabitDayDisabled
                    key={index + '0'}
                    style={{ width: 40, height: 40 }}
                  />
                ))
            }
          </StyledViewWeekDaysBody>
        }
      </ScrollView>
    </StyledViewContainer>
  )
}