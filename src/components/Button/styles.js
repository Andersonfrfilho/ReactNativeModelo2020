import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {fontSize} from '../../config/Functions';
const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
`;
export const Button = styled.TouchableOpacity`
  flex: 1;
  background: #45678f;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text`
  color: #f7f7f7;
  font-weight: bold;
  font-size: ${fontSize(width)};
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
  color: '#f7f7f7',
};
