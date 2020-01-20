import {CommonActions} from '@react-navigation/native';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(name) {
  navigator.dispatch(
    CommonActions.navigate({
      name,
    })
  );
}
