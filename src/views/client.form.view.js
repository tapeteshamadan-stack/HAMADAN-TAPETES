import { ClientController } from '../controllers/client.controller.js';
// Inputmask é carregado via <script> em index.html

export const ClientFormView = {
  render(client = {}, index = null) {
    const app = document.getElementById('app-root');
    app.innerHTML = `
      <div class="p-4 max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">${index !== null ? 'Editar Cliente' : 'Novo Cliente'}</h2>
        <form id="client-form" class="space-y-3 bg-white p-4 rounded shadow">
          <div class="grid grid-cols-2 gap-4">
            <input type="text" name="nome" placeholder="Nome completo" required class="border p-2 rounded w-full" value="${client.nome || ''}"/>
            <input type="text" name="cpfcnpj" placeholder="CPF ou CNPJ" class="border p-2 rounded w-full" value="${client.cpfcnpj || ''}"/>
            <input type="text" name="cep" placeholder="CEP" class="border p-2 rounded w-full" value="${client.cep || ''}"/>
            <input type="email" name="email" placeholder="Email" class="border p-2 rounded w-full" value="${client.email || ''}"/>
            <input type="tel" name="telefone" placeholder="Telefone" required class="border p-2 rounded w-full" value="${client.telefone || ''}"/>
            <div id="extra-telefones" class="col-span-2"></div>
            <div class="flex items-center space-x-2">
              <button type="button" id="add-telefone" class="bg-gray-300 px-2 py-1 rounded">+</button>
              <span>Adicionar telefone</span>
            </div>
            <input type="text" name="endereco" placeholder="Endereço" class="border p-2 rounded w-full" value="${client.endereco || ''}"/>
            <input type="text" name="complemento" placeholder="Complemento" class="border p-2 rounded w-full" value="${client.complemento || ''}"/>
            <input type="text" name="numero" placeholder="Número" class="border p-2 rounded w-full" value="${client.numero || ''}"/>
            <input type="text" name="bairro" placeholder="Bairro" class="border p-2 rounded w-full" value="${client.bairro || ''}"/>
            <input type="text" name="cidade" placeholder="Cidade" class="border p-2 rounded w-full" value="${client.cidade || ''}"/>
            <input type="text" name="estado" placeholder="Estado" class="border p-2 rounded w-full" value="${client.estado || ''}"/>
            <textarea name="obs" placeholder="Observações" class="border p-2 rounded w-full col-span-2">${client.obs || ''}</textarea>
          </div>
          <div class="text-right">
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Salvar</button>
            <a href="#clients" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancelar</a>
          </div>
        </form>
      </div>
    `;

    this.applyMasks();
    this.attachEvents(index);
  },

  applyMasks() {
  try {
    if (!window.Inputmask) return;

    const cpfcnpjInput = document.querySelector('input[name="cpfcnpj"]');
    const telefoneInput = document.querySelector('input[name="telefone"]');
    const cepInput = document.querySelector('input[name="cep"]');

    if (cpfcnpjInput) window.Inputmask({ mask: ["999.999.999-99", "99.999.999/9999-99"] }).mask(cpfcnpjInput);
    if (telefoneInput) window.Inputmask({ mask: "(99) 99999-9999" }).mask(telefoneInput);
    if (cepInput) window.Inputmask({ mask: "99999-999" }).mask(cepInput);

    const addTelBtn = document.getElementById('add-telefone');
    if (addTelBtn) {
      addTelBtn.addEventListener('click', () => {
        const container = document.getElementById('extra-telefones');
        if (!container) return;

        const input = document.createElement('input');
        input.type = 'tel';
        input.name = 'telefoneExtra';
        input.placeholder = 'Outro telefone';
        input.className = 'border p-2 rounded w-full mt-2';

        window.Inputmask({ mask: "(99) 99999-9999" }).mask(input);
        container.appendChild(input);
      });
    }
  } catch (err) {
    console.warn('Erro ao aplicar máscaras:', err);
  }
},

  attachEvents(index) {
    const form = document.getElementById('client-form');

    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const client = {
        nome: formData.get('nome'),
        cpfcnpj: formData.get('cpfcnpj'),
        cep: formData.get('cep'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        endereco: formData.get('endereco'),
        complemento: formData.get('complemento'),
        numero: formData.get('numero'),
        bairro: formData.get('bairro'),
        cidade: formData.get('cidade'),
        estado: formData.get('estado'),
        obs: formData.get('obs'),
      };

      if (index !== null) {
        ClientController.updateClient(index, client);
      } else {
        ClientController.addClient(client);
      }
    });
  }
};