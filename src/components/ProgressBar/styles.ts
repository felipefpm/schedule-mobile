import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const StyledViewContainerProgressBar = styled.View`
  width: 100%;
  height: 15px;
  border-radius: 8px;
  background-color: #2e2e2e;
  margin-top: 4%;
`;

export const StyledViewContentProgressBar = styled(Animated.View)`
  height: 15px;
  border-radius: 8px;
  background-color: #440099;
`;