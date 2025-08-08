
import { LayoutView } from './layout.view.js';

import { CarpetController } from '../controllers/carpet.controller.js';
import { Storage } from '../core/storage.js';

export const CarpetView = {
  render(data) {
    const html = `<div class="p-4 max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Cadastro de Tapetes</h2>
        <form id="carpet-form" class="mb-6 space-y-3 bg-white p-4 rounded shadow" enctype="multipart/form-data">
          <div class="grid grid-cols-2 gap-4">
            <input type="text" name="nome" placeholder="Nome" required class="border p-2 rounded w-full"/>
            <input type="text" name="formato" placeholder="Formato" required class="border p-2 rounded w-full"/>
            <input type="text" name="origem" placeholder="Origem" required class="border p-2 rounded w-full"/>
            <input type="text" name="historia" placeholder="História" class="border p-2 rounded w-full col-span-2"/>
            <input type="file" name="imagem" accept="image/*" class="border p-2 rounded w-full col-span-2"/>
          </div>
          <div class="text-right">
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Salvar</button>
          </div>
        </form>

        <ul id="carpet-list" class="space-y-4">
          ${data.map((carpet, i) => `
            <li class="bg-white shadow p-4 rounded flex gap-4">
              <div class="w-24 h-24 flex-shrink-0 overflow-hidden rounded border bg-gray-100">
                ${carpet.imagem ? `<img src="uploads/${carpet.imagem}" class="w-full h-full object-cover" alt="Imagem do tapete"/>` : ''}
              </div>
              <div class="flex-1">
                <p class="text-lg font-semibold">${carpet.nome}</p>
                <p class="text-sm text-gray-600">${carpet.formato} - ${carpet.origem}</p>
                <p class="text-sm mt-1">${carpet.historia || ''}</p>
              </div>
              <div class="flex flex-col gap-2">
                <button data-index="${i}" class="edit-btn text-sm bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Editar</button>
                <button data-index="${i}" class="delete-btn text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Excluir</button>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>`;
    LayoutView.render(html);
    this.attachEvents?.();
  },
  attachEvents() {
    // manter lógica original se existir
  }
};
