import { Storage } from '../core/storage.js';
import { CarpetView } from '../views/carpets.view.js';

export const CarpetController = {
  load() {
    const carpets = Storage.load('carpets') || [];
    CarpetView.render(carpets);
  },

  addCarpet(carpet) {
    const carpets = Storage.load('carpets') || [];
    carpets.push(carpet);
    Storage.save('carpets', carpets);
    this.load();
  },

  updateCarpet(index, carpet) {
    const carpets = Storage.load('carpets') || [];
    carpets[index] = carpet;
    Storage.save('carpets', carpets);
    this.load();
  },

  removeCarpet(index) {
    const carpets = Storage.load('carpets') || [];
    carpets.splice(index, 1);
    Storage.save('carpets', carpets);
    this.load();
  }
};