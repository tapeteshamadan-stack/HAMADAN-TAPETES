export const ServiceReadOnlyView = {
  render(service) {
    const app = document.getElementById('app-root');
    if (!service) {
      app.innerHTML = '<p class="text-red-500 text-center p-4">Serviço não encontrado.</p>';
      return;
    }

    app.innerHTML = `
      <div class="p-4 max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Visualização de Serviço</h2>
        <div class="bg-white p-4 rounded shadow space-y-4">
          <div><strong>Nome:</strong> ${service.name}</div>
          <div><strong>Unidade de Medida:</strong> ${service.unitType}</div>
          <div><strong>Valor:</strong> R$${parseFloat(service.price).toFixed(2)}</div>
        </div>
        <div class="mt-4">
          <a href="#services" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Voltar</a>
        </div>
      </div>
    `;
  }
};