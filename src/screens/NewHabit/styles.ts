import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const StyledViewContainerNewHabit = styled.View`
  flex: 1;
  background-color: #141313;
  padding-top: 2%;
  padding-left: 6%;
  padding-right: 6%;
`;

export const StyledTextTitle = styled.Text`
  margin-top: 16px;
  color: #fff;
  font-weight: bold;
  font-size: 36px;
`;

export const StyledTextBase = styled.Text`
  margin-top: 3%;
  margin-bottom: 3%;
  margin-top: 16px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const StyledTextInput = styled.TextInput`
  height: 50px;
  margin-top: 3%;
  border-radius: 8px;
  background-color: #2e2e2e;
  padding-left: 12px;
  font-size: 16px;
  color: #ffff;
`;

export const StyledTextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`;

export const StyledTouchableOpacityConfirmButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: green;
  border-radius: 8px;
  height: 60px;
  width: 100%;
  margin-top: 6%;
`;