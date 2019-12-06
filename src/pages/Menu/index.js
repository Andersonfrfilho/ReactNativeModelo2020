import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container} from './styles';
import * as LoginActions from '../../store/modules/login/actions';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import {navigate} from '../../services/navigation';

export default function Menu() {
  return (
    <Container>
      <Header />
      <Logo />
      <Button
        Title="Prosseguir"
        functionOnPress={() => navigate('Repositories')}
      />
    </Container>
  );
}
