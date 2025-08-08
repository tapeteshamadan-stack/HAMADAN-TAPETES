// src/models/order.model.js
export class OrderModel {
  constructor({ cliente, data, status, total, obs }) {
    this.id = Date.now(); // Exemplo de ID único
    this.cliente = cliente;
    this.data = data;
    this.status = status;
    this.total = parseFloat(total || 0);
    this.obs = obs || '';
  }
}
