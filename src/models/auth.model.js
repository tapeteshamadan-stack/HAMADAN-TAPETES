import { Storage } from '../core/storage.js';

const users = [
  { username: 'admin', password: '1234' }
];

export const AuthModel = {
  currentUser: null,

  async init() {
    this.currentUser = Storage.load('auth_user');
  },

  login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      Storage.save('auth_user', user);
      return true;
    }
    return false;
  },

  logout() {
    this.currentUser = null;
    Storage.remove('auth_user');
  }
};
