export default class PurchaseGetter {
  static store: any;

  static getPurchase() {
    return this.store.getState().purchase.purchase;
  }
}
