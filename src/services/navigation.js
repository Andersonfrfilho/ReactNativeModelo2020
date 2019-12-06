import {NavigationActions} from 'react-navigation';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(routeName) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
    })
  );
}
