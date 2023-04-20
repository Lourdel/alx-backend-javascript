export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error('Name and Code should be of type string');
    }
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'number') throw TypeError('code must be a number');
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
