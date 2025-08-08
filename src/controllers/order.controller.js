// src/controllers/z\q	
import { Storage } from '../core/storage.js';
import { OrderListView } from '../views/orders.list.view.js';
import { OrderReadOnlyView } from '../views/orders.readonly.view.js';

export const OrderController = {
  loadList() {
    const orders = Storage.load('orders') || [];
    OrderListView.render(orders);
  },

  loadView(index) {
    const orders = Storage.load('orders') || [];
    const order = orders[index];
    OrderReadOnlyView.render(order);
  }
};
