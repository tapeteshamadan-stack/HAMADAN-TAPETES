// src/views/orders.list.view.js
import { LayoutView } from './layout.view.js';
import { OrderController } from '../controllers/order.controller.js';
import { Storage } from '../core/storage.js';

export const OrderListView = {
  render(orders) {
    const app = document.getElementById('app-root');
    const html = `
      <div class="p-4 max-w-5xl mx-auto">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Pedidos Registrados</h2>
          <a href="#order-new" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Novo Pedido</a>
        </div>

        <div class="flex gap-2 mb-4">
          <input type="text" id="filtro-pedidos" placeholder="Buscar por cliente, valor, status ou ID..." class="border p-2 rounded w-full"/>
          <button id="btn-limpar-filtro" class="bg-gray-300 px-4 rounded">Limpar</button>
        </div>

        <ul id="order-list" class="space-y-4">
          ${orders.map((o, i) => `
            <li class="bg-white shadow p-4 rounded flex justify-between items-center">
              <div>
                <p class="text-lg font-semibold">Ordem de Serviço #${o.id}</p>
                <p class="text-sm text-gray-600">Cliente: ${o.cliente || 'N/D'} | Valor: R$ ${o.total?.toFixed(2) || '0.00'} | Data: ${o.data || '-'}</p>
              </div>
              <div class="flex gap-2">
                <a href="#order-view?id=${i}" class="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Visualizar</a>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    `;

    LayoutView.render(html);
    this.attachEvents();
  },

  attachEvents() {
    const filtro = document.getElementById('filtro-pedidos');
    const limpar = document.getElementById('btn-limpar-filtro');

    filtro.addEventListener('input', () => {
      const termo = filtro.value.toLowerCase();
      const todos = Storage.load('orders') || [];
      const filtrados = todos.filter(o =>
        (o.cliente || '').toLowerCase().includes(termo) ||
        (o.id + '').includes(termo) ||
        (o.total + '').includes(termo) ||
        (o.data || '').includes(termo)
      );
      this.render(filtrados);
    });

    limpar.addEventListener('click', () => {
      filtro.value = '';
      this.render(Storage.load('orders') || []);
    });
  }
};
