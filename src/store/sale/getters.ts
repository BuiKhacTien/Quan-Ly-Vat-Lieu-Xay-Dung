export default class SaleGetter {
  static store: any;

  static getSale() {
    return this.store.getState().sale.sale;
  }
}
