
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { StyledViewHeader, StyledTextNew, StyledTouchableOpacity } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  const { navigate } = useNavigation()

  return (
    <StyledViewHeader>
      <Logo />

      <StyledTouchableOpacity 
        activeOpacity={0.7}
        onPress={() => navigate('new')}
      >
        <Feather 
          name="plus" 
          color="#440099" 
          size={20} 
        />

        <StyledTextNew>
          Novo
        </StyledTextNew>
      </StyledTouchableOpacity>
    </StyledViewHeader>
  )
}