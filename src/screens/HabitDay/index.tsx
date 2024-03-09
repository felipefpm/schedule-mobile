import { ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';
import dayjs from "dayjs";

import { StyledTextDayAndMonth, StyledTextWeekDay, StyledViewCheckBoxHabits, StyledViewContainerHabit } from "./styles";
import { BackButton } from "../../components/BackButton";
import { ProgressBar } from "../../components/ProgressBar";
import { CheckBox } from "../../components/CheckBox";

interface HabitProps {
  date: string
}


export function HabitDay() {
  const route = useRoute()
  const { date } = route.params as HabitProps;

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')
  
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

        <ProgressBar progress={25} />

        <StyledViewCheckBoxHabits>
          <CheckBox 
            title="Beber 2L de água"
            checked={false}
          />
          <CheckBox 
            title="Caminhar"
            checked={true}
          />
        </StyledViewCheckBoxHabits>

      </ScrollView>
    </StyledViewContainerHabit>
  )
}