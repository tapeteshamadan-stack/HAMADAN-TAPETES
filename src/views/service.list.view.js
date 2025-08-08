import { LayoutView } from './layout.view.js';
import { ServiceModel } from '../models/service.model.js';

export const ServiceListView = {
  render() {
    const services = ServiceModel.getAll();
    const itensHtml = services.map((s, i) => `
      <li class="bg-white shadow p-4 rounded flex justify-between items-center">
        <div>
          <p class="text-lg font-semibold">${s.name}</p>
          <p class="text-sm text-gray-600">R$${parseFloat(s.price).toFixed(2)} | ${s.unitType}</p>
        </div>
        <div class="flex gap-2">
          <a href="#service-view?id=${i}" class="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Visualizar</a>
          <a href="#service-edit?id=${i}" class="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Editar</a>
          <button data-index="${i}" class="delete-btn bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Excluir</button>
        </div>
      </li>
    `).join('');

    const html = `
      <div class="p-4 max-w-4xl mx-auto">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl font-bold">Serviços Cadastrados</h1>
          <a href="#service-new" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Novo Serviço</a>
        </div>
        <ul id="service-list" class="space-y-4">
          ${itensHtml}
        </ul>
      </div>
    `;

    LayoutView.render(html);

    // Eventos de exclusão
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index);
        if (confirm('Deseja realmente excluir este serviço?')) {
          ServiceModel.remove(index);
          this.render();
        }
      });
    });
  }
};