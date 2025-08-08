import { AuthController } from './controllers/auth.controller.js';
import { DashboardController } from './controllers/dashboard.controller.js';
import { ClientController } from './controllers/client.controller.js';
import { CarpetController } from './controllers/carpet.controller.js';
import { OrderController } from './controllers/order.controller.js';
import { ConfigController } from './controllers/config.controller.js';
import { ServiceController } from './controllers/service.controller.js';

const ROUTES = {
  '#login': { render: () => AuthController.render() },
  '#dashboard': { render: () => DashboardController.load() },
  '#clients': { render: () => ClientController.loadList() },
  '#client-new': { render: () => ClientController.loadForm() },
  '#client-edit': {
    render: () => {
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const id = parseInt(params.get('id'));
      ClientController.loadForm(id);
    }
  },
  '#client-view': {
    render: () => {
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const id = parseInt(params.get('id'));
      ClientController.loadView(id);
    }
  },
  '#carpets': { render: () => CarpetController.load() },
  '#carpet-new': { render: () => CarpetController.loadForm() },
  '#carpet-edit': {
    render: () => {
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const id = parseInt(params.get('id'));
      CarpetController.loadForm(id);
    }
  },
  '#carpet-view': {
    render: () => {
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const id = parseInt(params.get('id'));
      CarpetController.loadView(id);
    }
  },
  '#orders': { render: () => OrderController.loadList() },
  '#order-view': {
     render: () => {
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const id = parseInt(params.get('id'));
      OrderController.loadView(id);
    }
  },
  '#config': { render: () => ConfigController.render() },
  '#services': { render: () => ServiceController.loadList() },
  '#service-new': { render: () => ServiceController.loadForm() },
  '#service-edit': {
    render: () => {
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const id = parseInt(params.get('id'));
      ServiceController.loadForm(id);
    }
  },
  '#service-view': {
    render: () => {
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const id = parseInt(params.get('id'));
      ServiceController.loadView(id);
    }
  }
};

function router() {
  if (!AuthController.isAuthenticated?.()) {
    window.location.hash = '#login';
    return;
  }

  const hash = window.location.hash;
  const [baseHash] = hash.split('?');
  const route = ROUTES[baseHash] || ROUTES['#dashboard'];
  route.render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

export const init = router;