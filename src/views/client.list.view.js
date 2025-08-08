import { LayoutView } from './layout.view.js';
import { ClientController } from '../controllers/client.controller.js';
import { Storage } from '../core/storage.js';

export const ClientListView = {
  render(clients) {
    const app = document.getElementById('app-root');
    const html = `<div class="p-4 max-w-4xl mx-auto">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Clientes Cadastrados</h2>
          <a href="#" id="btn-novo-cliente" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Novo Cliente</a>
        </div>
        <input type="text" id="filtro-clientes" placeholder="Pesquisar cliente..." class="border p-2 rounded mb-4 w-full"/>

        <ul id="client-list" class="space-y-4">
          ${clients.map((c, i) => `
            <li class="bg-white shadow p-4 rounded flex justify-between items-center">
              <div>
                <p class="text-lg font-semibold">${c.nome}</p>
                <p class="text-sm text-gray-600">${c.telefone || ''} | ${c.email || ''}</p>
              </div>
              <div class="flex gap-2">
                <a href="#client-view?id=${i}" class="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Visualizar</a>
                <a href="#client-edit?id=${i}" class="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Editar</a>
                <button data-index="${i}" class="delete-btn bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Excluir</button>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>`;
    LayoutView.render(html);

    this.attachEvents();
  },

  attachEvents() {
    document.getElementById('btn-novo-cliente')?.addEventListener('click', e => {
      e.preventDefault();
      if (location.hash === '#client-new') {
        location.hash = '#';
        setTimeout(() => (location.hash = '#client-new'), 10);
      } else {
        location.hash = '#client-new';
      }
    });
    const filtro = document.getElementById('filtro-clientes');

    
filtro.addEventListener('input', () => {
  const termo = filtro.value.toLowerCase();
  const todos = Storage.load('clients') || [];
  const filtrados = todos.filter(c => c.nome.toLowerCase().includes(termo));

  const lista = document.getElementById('client-list');
  lista.innerHTML = filtrados.map((c, i) => `
    <li class="bg-white shadow p-4 rounded flex justify-between items-center">
      <div>
        <p class="text-lg font-semibold">${c.nome}</p>
        <p class="text-sm text-gray-600">${c.telefone || ''} | ${c.email || ''}</p>
      </div>
      <div class="flex gap-2">
        <a href="#client-view?id=${i}" class="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">Visualizar</a>
        <a href="#client-edit?id=${i}" class="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Editar</a>
        <button data-index="${i}" class="delete-btn bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Excluir</button>
      </div>
    </li>
  `).join('');

  lista.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      if (confirm("Deseja realmente excluir este cliente?")) {
        ClientController.removeClient(index);
      }
    });
  });
});


    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index);
        if (confirm("Deseja realmente excluir este cliente?")) {
          ClientController.removeClient(index);
        }
      });
    });
  }
};