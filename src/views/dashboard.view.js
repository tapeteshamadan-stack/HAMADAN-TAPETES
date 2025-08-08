import { LayoutView } from './layout.view.js';

export const DashboardView = {
    render(stats) {
        const html = `
            <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
            <div class="grid grid-cols-3 gap-6">
                <div class="p-4 bg-white rounded shadow">
                    <h2 class="text-lg font-semibold">Total de Pedidos</h2>
                    <p class="text-2xl">${stats.total}</p>
                </div>
                <div class="p-4 bg-white rounded shadow">
                    <h2 class="text-lg font-semibold">Pendentes</h2>
                    <p class="text-2xl">${stats.pending}</p>
                </div>
                <div class="p-4 bg-white rounded shadow">
                    <h2 class="text-lg font-semibold">Concluídos</h2>
                    <p class="text-2xl">${stats.completed}</p>
                </div>
            </div>
        `;

        LayoutView.render(html);
    }
};