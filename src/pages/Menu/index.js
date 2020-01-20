import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

export default function Menu() {
  return (
    <Container>
      <Header />
      <Logo />
      <Button Title="Prosseguir" functionOnPress={() => {}} />
    </Container>
  );
}
