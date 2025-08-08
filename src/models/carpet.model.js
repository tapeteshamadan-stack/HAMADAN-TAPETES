import { Storage } from '../core/storage.js';

export const CarpetModel = {
    getAll() {
        return Storage.load('carpets') || [];
    },

    add(carpet) {
        const carpets = this.getAll();
        carpets.push(carpet);
        Storage.save('carpets', carpets);
    }
};