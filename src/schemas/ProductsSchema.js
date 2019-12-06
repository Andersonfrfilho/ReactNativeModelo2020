export default class ProductSchema {
  static schema = {
    name: 'Products2',
    primaryKey: 'ProGrupo',
    properties: {
      ProGrupo: {type: 'int', indexed: true},
      ProGrupoDe: 'string',
      ProPreco: 'double',
    },
  };
}
