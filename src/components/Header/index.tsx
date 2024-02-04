
import { StyledViewHeader, StyledTextNew, StyledTouchableOpacity } from './styles'
import { Feather } from '@expo/vector-icons'

import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <StyledViewHeader>
      <Logo />

      <StyledTouchableOpacity 
        activeOpacity={0.7}

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