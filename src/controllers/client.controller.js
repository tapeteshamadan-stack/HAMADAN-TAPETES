import { Storage } from '../core/storage.js';
import { ClientListView } from '../views/client.list.view.js';
import { ClientFormView } from '../views/client.form.view.js';
import { ClientReadOnlyView } from '../views/client.readonly.view.js';

export const ClientController = {
  loadList() {
    const clients = Storage.load('clients') || [];
    ClientListView.render(clients);
    ClientListView.attachEvents();
    ClientListView.attachEvents();
  },

  loadForm(index = null) {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const client = index !== null ? clients[index] : {};
    ClientFormView.render(client, index);
  },

  loadView(index) {
    const clients = Storage.load('clients') || [];
    const client = clients[index];
    ClientReadOnlyView.render(client);
  },

  addClient(client) {
    const clients = Storage.load('clients') || [];
    clients.push(client);
    Storage.save('clients', clients);
    this.loadList();
  },

  updateClient(index, client) {
    const clients = Storage.load('clients') || [];
    clients[index] = client;
    Storage.save('clients', clients);
    this.loadList();
  },

  removeClient(index) {
    const clients = Storage.load('clients') || [];
    clients.splice(index, 1);
    Storage.save('clients', clients);
    this.loadList();
  }
};