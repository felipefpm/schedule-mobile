import styled from 'styled-components/native';

export const StyledViewContainer = styled.View`
  flex: 1;
  background-color: #141313;
  padding-top: 18%;
  padding-right: 6%;
  padding-left: 6%;
`;

export const StyledViewWeekDaysHeader = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

export const StyledViewWeekDaysBody = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1%;
`;

export const StyledItemHabitDayDisabled = styled.View`
  background-color: #202020;
  border: solid 2px #2e2e2e;
  border-radius: 10px;
  margin: 1.6%;
  opacity: 0.4;
`;

export const StyledTextWeekDay = styled.Text`
  color: #636262;
  width: 40px;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin: 1.7%;
`;