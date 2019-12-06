import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Text, Button} from './styles';
import * as RepositoriesActions from '../../store/modules/repositories/actions';

export default function Repositories() {
  return (
    <Container>
      <Text>Pagina 3</Text>
    </Container>
  );
}
