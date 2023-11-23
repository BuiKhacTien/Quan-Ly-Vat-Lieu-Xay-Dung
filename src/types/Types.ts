type TType = {

}

export default TType;

export type TItemSelect = {
  id: string;
  name: string;
}


export type TMaterial = {
  id: number;
  name: string;
  description: string;
  unit: string;
  inventory: number;
  currentPrice: number;
  // Các thông tin khác về vật liệu
}

export type InventoryItem = {
  materialId: number;
  quantity: number;
  // Các thông tin khác về tồn kho
}

// bán hàng
export type TSaleOrder = {
  id: number;
  items: TSaleOrderItem[];
  totalPrice: number;
  date: string;
  address: string;
  phone: string;
  note: string;
  // Các thông tin khác về đơn hàng đã bán ra
}

export type TSaleOrderItem = {
  materialId: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

// mua hàng
export type TPurchaseOrder = {
  id: number;
  items: TPurchaseOrderItem[];
  totalPrice: number;
  date: string;
  address: string;
  phone: string;
  note: string;
  // Các thông tin khác về đơn hàng đã bán ra
}

export type TPurchaseOrderItem = {
  materialId: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export type TCustomer = {
  id: number;
  name: string;
  phone: string;
  address: string;
  note: string;
}

export type TSupplier = {
  id: number;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  note: string;
  // Các thông tin khác về nhà cung cấp
}
