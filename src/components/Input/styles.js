import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.View`
  border-width: 3px;
  border-color: ${() => colors.white};
  background: ${() => colors.white};
  border-radius: 12px;
  height: 50px;
  margin: 20px;
`;
export const Input = styled.TextInput`
  flex: 1;
`;
