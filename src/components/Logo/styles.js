import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {metrics, colors} from '../../styles';

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
  font-size: ${metrics.fontSize()};

  color: ${props => (props.error ? colors.danger : props.color)};
`;
Message.propTypes = {
  color: PropTypes.string,
};
Message.defaultProps = {
  color: colors.white,
};
