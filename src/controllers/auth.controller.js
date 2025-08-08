import { LoginView } from '../views/login.view.js';
import { AuthModel } from '../models/auth.model.js';

export const AuthController = {
  async init() {
    await AuthModel.init();
  },

  isAuthenticated() {
    return !!AuthModel.currentUser;
  },

  render() {
    LoginView.render();
  },

  login(username, password) {
    const isValid = AuthModel.login(username, password);
    if (isValid) {
      window.location.hash = '#dashboard';
    } else {
      LoginView.showError('Usuário ou senha inválidos');
    }
  },

  logout() {
    AuthModel.logout();
    window.location.hash = '#login';
  }
};