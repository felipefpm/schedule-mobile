import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { StyledViewContainerRoutes } from './styles'

export function Routes() {
  return(
    <StyledViewContainerRoutes>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </StyledViewContainerRoutes>
  )
}