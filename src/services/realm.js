import Realm from 'realm';

import Schemas from '../schemas';

export default function getRealm() {
  const {Products} = Schemas;
  return Realm.open({
    schema: [Products],
  });
}
