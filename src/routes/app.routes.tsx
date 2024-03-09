import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home'
import { NewHabits } from '../screens/NewHabit'
import { HabitDay } from '../screens/HabitDay';

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home}/>
      <Screen name='new' component={NewHabits}/>
      <Screen name='habitday' component={HabitDay}/>
    </Navigator>
  )
}