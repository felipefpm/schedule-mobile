
import { TouchableOpacityProps } from "react-native";

import { Feather } from '@expo/vector-icons'

import { 
  StyledText,
  StyledTouchableOpacityContainer, 
  StyledViewCheckBoxChecked, 
  StyledViewCheckBoxUnChecked 
} from "./styles";

interface CheckBoxProps extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function CheckBox({ title, checked = false, ...rest }: CheckBoxProps) {
  return(
    <StyledTouchableOpacityContainer activeOpacity={0.7} {...rest}>
      {
        checked ?
          <StyledViewCheckBoxChecked>
            <Feather 
              name='check'
              size={20}
              color="#fff"
            />
          </StyledViewCheckBoxChecked>
        :
          <StyledViewCheckBoxUnChecked />
      }

      <StyledText>
        {title}
      </StyledText>
    </StyledTouchableOpacityContainer>
  )
}