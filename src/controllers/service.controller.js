import { ServiceListView } from '../views/service.list.view.js';
import { ServiceFormView } from '../views/service.form.view.js';
import { ServiceReadOnlyView } from '../views/service.readonly.view.js';
import { ServiceModel } from '../models/service.model.js';

export const ServiceController = {
  loadList() {
    const services = ServiceModel.getAll();
    ServiceListView.render(services);
  },

  loadForm(index = null) {
    if (index !== null) {
      const service = ServiceModel.getAll()[index];
      ServiceFormView.render(service, index);
    } else {
      ServiceFormView.render();
    }
  },

  loadView(index) {
    const service = ServiceModel.getAll()[index];
    ServiceReadOnlyView.render(service);
  },

  addService(service) {
    service.id = Date.now().toString();
    ServiceModel.add(service);
    window.location.hash = '#services';
  },

  updateService(index, service) {
    const all = ServiceModel.getAll();
    if (index >= 0 && index < all.length) {
      service.id = all[index].id;
      ServiceModel.update(index, service);
    }
    this.loadList();
  },

  removeService(index) {
    ServiceModel.remove(index);
    this.loadList();
  }
};