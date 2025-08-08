import { AuthController } from '../controllers/auth.controller.js';

export const LoginView = {
  render() {
    const root = document.getElementById('app-root');
    root.innerHTML = `
        <div class="relative w-full h-screen">
        <!-- camada da imagem -->
        <div class="absolute inset-0 bg-cover bg-center blur-sm" style="background-image: url('../uploads/A1.jpg');"></div>
        <!-- camada escurecida -->
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        <!-- conteúdo do login -->
        <div class="relative flex flex-col justify-center items-center h-full px-4">
           <img src="../uploads/logo1.png" alt="Logotipo Hamadan Tapetes" class="w-32 mb-4 drop-shadow" />
          <h1 class="text-3xl font-bold text-white text-center mb-7 drop-shadow">
            SISTEMA DE GESTÃO DE TAPETES<br>
            HAMADAN TAPETES
          </h1>
          <div class="bg-white bg-opacity-90 p-8 rounded shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form id="login-form" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Usuário</label>
                <input type="text" id="username" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Senha</label>
                <input type="password" id="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" required>
              </div>
              <p id="login-error" class="text-red-500 text-sm hidden"></p>
              <div>
                <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    const form = document.getElementById('login-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      AuthController.login(username, password);
    });
  },

  showError(message) {
    const errorEl = document.getElementById('login-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
  }
};
