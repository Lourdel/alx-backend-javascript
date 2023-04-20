import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || !(currency instanceof Currency)) throw TypeError('Amount should be a number and currency a Currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof amount !== 'number') throw TypeError('Amount should be a number');
    this._amount = value;
  }

  get curreny() {
    return this._currency;
  }

  set currency({ code, name }) {
    this._currency = new Currency(code, name);
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
