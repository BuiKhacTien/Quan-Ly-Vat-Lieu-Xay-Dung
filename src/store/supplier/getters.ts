export default class SupplierGetter {
  static store: any;

  static getSupplier() {
    return this.store.getState().supplier.supplier;
  }
}
