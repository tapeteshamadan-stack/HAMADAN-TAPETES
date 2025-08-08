import { Storage } from '../core/storage.js';

export const ClientModel = {
  getAll() {
    return Storage.load('clients') || [];
  },

  add(client) {
    const clients = this.getAll();
    clients.push(client);
    Storage.save('clients', clients);
  },

  update(index, client) {
    const clients = this.getAll();
    clients[index] = client;
    Storage.save('clients', clients);
  },

  remove(index) {
    const clients = this.getAll();
    clients.splice(index, 1);
    Storage.save('clients', clients);
  }
};