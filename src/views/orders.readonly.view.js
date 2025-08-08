// src/views/orders.readonly.view.js
export const OrderReadOnlyView = {
  render(order) {
    const app = document.getElementById('app-root');
    if (!order) {
      app.innerHTML = '<p class="text-red-500 text-center p-4">Pedido não encontrado.</p>';
      return;
    }

    app.innerHTML = `
      <div class="p-4 max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Detalhes do Pedido</h2>
        <div class="bg-white p-4 rounded shadow space-y-4">
          <p><strong>ID:</strong> ${order.id}</p>
          <p><strong>Cliente:</strong> ${order.cliente}</p>
          <p><strong>Data:</strong> ${order.data}</p>
          <p><strong>Status:</strong> ${order.status}</p>
          <p><strong>Total:</strong> R$ ${order.total?.toFixed(2)}</p>
          <p><strong>Observações:</strong> ${order.obs || '-'}</p>
        </div>
        <div class="mt-4">
          <a href="#orders" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Voltar</a>
        </div>
      </div>
    `;
  }
};
