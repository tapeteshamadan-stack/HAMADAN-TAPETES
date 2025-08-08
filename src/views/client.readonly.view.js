export const ClientReadOnlyView = {
  render(client) {
    const app = document.getElementById('app-root');
    if (!client) {
      app.innerHTML = '<p class="text-red-500 text-center p-4">Cliente não encontrado.</p>';
      return;
    }

    app.innerHTML = `
      <div class="p-4 max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold mb-4">Cliente Cadastrado</h2>
        <div class="bg-white p-4 rounded shadow space-y-4">
        <div class="flex-shrink-0 overflow-y-scroll">
          <div><strong>Nome: ${client.nome || ''}</strong></div>
          <div><strong>CPF/CNPJ:</strong> ${client.cpfcnpj || ''}</div>
          <div><strong>CEP:</strong> ${client.cep || ''}</div>
          <div><strong>Email:</strong> ${client.email || ''}</div>
          <div><strong>Telefone:</strong> ${client.telefone || ''}</div>
          <div><strong>Endereço:</strong> ${client.endereco || ''}</div>
          <div><strong>Complemento:</strong> ${client.complemento || ''}</div>
          <div><strong>Número:</strong> ${client.numero || ''}</div>
          <div><strong>Bairro:</strong> ${client.bairro || ''}</div>
          <div><strong>Cidade:</strong> ${client.cidade || ''}</div>
          <div><strong>Estado:</strong> ${client.estado || ''}</div>
          <div><strong>Observações:</strong> ${client.obs || ''}</div>
        </div>
        </div>
        <div class="mt-4">
          <a href="#clients" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Voltar</a>
        </div>
      </div>
    `;
  }
};