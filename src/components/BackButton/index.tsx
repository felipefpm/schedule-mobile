import { StyledTouchableOpacityBackButton } from "./styles";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export function BackButton() {
  const { goBack } = useNavigation()

  return(
    <StyledTouchableOpacityBackButton
      activeOpacity={0.7}
      onPress={goBack}
    >
      <Feather
        name="arrow-left"
        size={32}
        color="#666565"
      />
    </StyledTouchableOpacityBackButton>
  )
}