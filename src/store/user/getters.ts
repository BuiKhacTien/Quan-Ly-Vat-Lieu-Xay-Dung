export default class UserGetter {
  static store: any;

  static getId() {
    return this.store.getState()?.user?.id as string;
  }
  static getName(): string {
    return this.store.getState().user?.name as string;
  }
  static getToken() {
    return this.store.getState().user?.token;
  }
  static getStoreId() {
    return this.store.getState().user?.storeId;
  }
}
