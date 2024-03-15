import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface Props {
  backgroundType: number
  currentDay: boolean
}

export const StyledItemHabitDay = styled(TouchableOpacity)`
  background-color: ${({ backgroundType }: Props) => {
    if (backgroundType === 0) {
      return '#202020'
    }
    if (backgroundType > 0 && backgroundType < 20) {
      return 'rgb(76 29 149)'
    }
    if (backgroundType > 20 && backgroundType < 40) {
      return 'rgb(91 33 182)'
    }
    if (backgroundType > 40 && backgroundType < 60) {
      return 'rgb(109 40 217)'
    }
    if (backgroundType > 60 && backgroundType < 80) {
      return 'rgb(124 58 237)'
    }
    if (backgroundType < 80) {
      return 'rgb(139 92 246)'
    }
  }};
  border: ${({ backgroundType, currentDay }: Props) => {
    if (backgroundType === 0) {
      return ' #2e2e2e'
    }
    if (backgroundType > 0 && backgroundType < 20) {
      return 'solid 2px rgb(109 40 217)'
    }
    if (backgroundType > 20 && backgroundType < 40) {
      return 'solid 2px rgb(124 58 237)'
    }
    if (backgroundType > 40 && backgroundType < 80) {
      return 'solid 2px rgb(139 92 246)'
    }
    if (backgroundType < 80) {
      return 'solid 2px rgb(167 139 250)'
    }
    if (currentDay) {
      return 'solid 2px #fff'
    }
  }};
  border-radius: 10px;
  margin: 1.6%;
`;