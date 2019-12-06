import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container} from './styles';
import * as LoginActions from '../../store/modules/login/actions';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login() {
  const {loading, error, message} = useSelector(state => state.common);
  const [stateUsername, setStateUsername] = useState('');
  useEffect(() => {}, []);
  const dispatch = useDispatch();
  function handleLogin() {
    dispatch(LoginActions.Creators.addToLoginRequest(stateUsername));
  }
  return (
    <Container>
      <Header />
      <Logo message={message} error={error} />
      <Input
        placeholder="Digite seu usuario:"
        value={stateUsername}
        functionOnChangeText={text => {
          setStateUsername(text);
        }}
      />
      <Container>
        <Button
          title="Prosseguir"
          functionOnPress={() => {
            handleLogin();
          }}
          loading={loading}
          disabled={!stateUsername || loading}
        />
      </Container>
    </Container>
  );
}
