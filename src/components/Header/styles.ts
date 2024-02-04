import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const StyledViewHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTextNew = styled.Text`
  color: white;
  margin-left: 6%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  flex-direction: row;
  height: 80%;
  padding-left: 2%;
  padding-right: 2%;
  border: solid 1px #440099;
  border-radius: 8px;
  align-items: center;
`;