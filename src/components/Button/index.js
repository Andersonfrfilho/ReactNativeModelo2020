import React from 'react';
import PropTypes from 'prop-types';
import {Container, Button, Text, Loading} from './styles';
import {colors} from '../../styles';

export default function Logo({
  title,
  loading,
  disabled,
  functionOnPress,
  loadingSize,
  loadingColor,
}) {
  return (
    <Container>
      <Button onPress={functionOnPress} disabled={disabled}>
        {loading ? (
          <Loading size={loadingSize} color={loadingColor} />
        ) : (
          <Text>{title}</Text>
        )}
      </Button>
    </Container>
  );
}
Logo.propTypes = {
  title: PropTypes.string,
  functionOnPress: PropTypes.func,
  loading: PropTypes.bool,
  loadingSize: PropTypes.string,
  loadingColor: PropTypes.string,
  disabled: PropTypes.bool,
};
Logo.defaultProps = {
  title: 'Título da Página',
  functionOnPress: () => {},
  loading: false,
  loadingSize: 'small',
  loadingColor: colors.light,
  disabled: true,
};
