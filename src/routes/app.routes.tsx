import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home'
import { Habits } from '../screens/Habit'
import { NewHabits } from '../screens/NewHabit'

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home}/>
      <Screen name='new' component={NewHabits}/>
      <Screen name='habits' component={Habits}/>
    </Navigator>
  )
}