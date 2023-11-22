export default class MaterialGetter {
  static store: any;

  static getMatetial() {
    return this.store.getState().matetial.matetial;
  }
}
