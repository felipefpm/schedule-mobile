import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const StyledTouchableOpacityContainer = styled(TouchableOpacity)`
  flex-direction: row;
  margin-bottom: 2%;
  align-items: center;
`;

export const StyledViewCheckBoxChecked = styled.View`
  height: 32px;
  width: 32px;
  background-color: green;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const StyledViewCheckBoxUnChecked = styled.View`
  height: 32px;
  width: 32px;
  background-color: #2e2e2e;
  border-radius: 8px;
`;

export const StyledText = styled.Text`
  color: #fff;
  margin-left: 8px;
`;