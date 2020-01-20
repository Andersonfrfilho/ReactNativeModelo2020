import styled from 'styled-components/native';
import {metrics} from '../../styles';

export const Container = styled.View`
  margin-top: ${() => metrics.baseMarginTop()};
  height: 40px;
`;
