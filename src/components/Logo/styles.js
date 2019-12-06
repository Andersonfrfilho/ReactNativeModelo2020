import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {fontSize} from '../../config/Functions';

const {height, width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;
export const AreaImage = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-grow: 1;
`;
export const Image = styled.Image`
  flex: 1;
`;
export const Message = styled.Text`
  flex: 1;
  font-size: ${fontSize(width)};

  color: ${props => (props.error ? '#e45' : props.color)};
`;
Message.propTypes = {
  color: PropTypes.string,
};
Message.defaultProps = {
  color: '#f7f7f7',
};
