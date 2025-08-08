import { Storage } from '../core/storage.js';

export const ServiceModel = {
  getAll() {
    return Storage.load('services') || [];
  },

  getById(id) {
    const services = this.getAll();
    return services.find(s => s.id === id);
  },

  add(service) {
    const services = this.getAll();
    services.push(service);
    Storage.save('services', services);
  },

  update(index, updatedService) {
    const services = this.getAll();
    services[index] = updatedService;
    Storage.save('services', services);
  },

  remove(index) {
    const services = this.getAll();
    services.splice(index, 1);
    Storage.save('services', services);
  }
};