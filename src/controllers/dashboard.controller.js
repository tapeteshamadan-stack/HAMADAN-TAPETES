import { DashboardView } from '../views/dashboard.view.js';

export const DashboardController = {
  load() {
    // Dados simulados (poderá ser substituído por dados reais do backend futuramente)
    const stats = {
      total: 25,
      pending: 10,
      completed: 15
    };

    DashboardView.render(stats);
  }
};