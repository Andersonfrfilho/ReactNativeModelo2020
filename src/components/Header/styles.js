import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 40 : 0};
  height: 40px;
`;
