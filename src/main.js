import * as Router from './router.js';
import { AuthController } from './controllers/auth.controller.js';
import { ConfigController } from './controllers/config.controller.js';

window.addEventListener('DOMContentLoaded', async () => {
    ConfigController.init?.();
    await AuthController.init?.();

    if (!AuthController.isAuthenticated?.()) {
        window.location.hash = '#login';
    }

    Router.init();
});