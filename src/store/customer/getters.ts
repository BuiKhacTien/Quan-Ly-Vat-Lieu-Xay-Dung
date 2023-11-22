export default class CustomerGetter {
  static store: any;

  static getCustomer() {
    return this.store.getState().customer.customer;
  }
}
