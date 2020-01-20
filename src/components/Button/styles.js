import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {colors, metrics} from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
`;
export const Button = styled.TouchableOpacity`
  flex: 1;
  background: ${() => colors.primary};
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text`
  color: ${() => colors.white};
  font-weight: bold;
  font-size: ${metrics.fontSize()};
`;
export const Loading = styled.ActivityIndicator.attrs(props => {
  return {
    size: `${props.size}`,
    color: `${props.color}`,
  };
})``;
Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
Loading.defaultProps = {
  size: 'small',
  color: colors.white,
};
