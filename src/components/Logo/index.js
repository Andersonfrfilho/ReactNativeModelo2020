import React from 'react';
import PropTypes from 'prop-types';
import {Container, AreaImage, Image, Message} from './styles';
import ImageLogo from '../../../assets/images/logo.png';

export default function Logo({message, error, colorMessage}) {
  return (
    <Container>
      <AreaImage>
        <Image source={ImageLogo} resizeMode="center" />
      </AreaImage>
      {!!message && (
        <Message error={error} color={colorMessage}>
          {message}
        </Message>
      )}
    </Container>
  );
}
Logo.propTypes = {
  message: PropTypes.string,
  colorMessage: PropTypes.string,
  error: PropTypes.bool,
};
Logo.defaultProps = {
  message: 'placeholder input:',
  colorMessage: '#f7f7f7',
  error: false,
};
