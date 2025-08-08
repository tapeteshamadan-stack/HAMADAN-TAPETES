import { ServiceController } from '../controllers/service.controller.js';

export const ServiceFormView = {
  render(service = {}, index = null) {
    const app = document.getElementById('app-root');
    app.innerHTML = `
      <div class="p-4 max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">${index !== null ? 'Editar Serviço' : 'Novo Serviço'}</h2>
        <form id="service-form" class="space-y-4 bg-white p-4 rounded shadow">
          <div class="grid grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Nome do Serviço" required class="border p-2 rounded w-full" value="${service.name || ''}"/>
            <select name="unitType" class="border p-2 rounded w-full" required>
              <option value="">Selecione a unidade</option>
              <option value="unidade" \${service.unitType === 'unidade' ? 'selected' : ''}>Unitário</option>
              <option value="m2" \${service.unitType === 'm2' ? 'selected' : ''}>Metro Quadrado (m²)</option>
              <option value="metro_linear" \${service.unitType === 'metro_linear' ? 'selected' : ''}>Metro Linear (m)</option>
              <option value="dias" \${service.unitType === 'dias' ? 'selected' : ''}>Dias</option>
            </select>
            <input type="number" name="price" step="0.01" min="0" placeholder="Valor (R$)" required class="border p-2 rounded w-full" value="\${service.price || ''}"/>
          </div>
          <div class="text-right">
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Salvar</button>
            <a href="#services" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancelar</a>
          </div>
        </form>
      </div>
    `;

    this.attachEvents(index);
  },

  attachEvents(index) {
    const form = document.getElementById('service-form');

    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const service = {
        name: formData.get('name'),
        unitType: formData.get('unitType'),
        price: parseFloat(formData.get('price'))
      };

      if (index !== null) {
        ServiceController.updateService(index, service);
      } else {
        ServiceController.addService(service);
      }
    });
  }
};