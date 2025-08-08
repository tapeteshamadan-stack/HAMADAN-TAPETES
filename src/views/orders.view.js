import { LayoutView } from './layout.view.js';

export const OrderView = {
    render(orders) {
        const rows = orders.map(o => `
            <tr>
                <td class="border px-4 py-2">${o.id}</td>
                <td class="border px-4 py-2">${o.status}</td>
                <td class="border px-4 py-2">${o.total}</td>
            </tr>
        `).join('');

        const html = `
            <h1 class="text-3xl font-bold mb-6">Pedidos</h1>
            <table class="table-auto w-full text-left border">
                <thead>
                    <tr>
                        <th class="border px-4 py-2">ID</th>
                        <th class="border px-4 py-2">Status</th>
                        <th class="border px-4 py-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;

        LayoutView.render(html);
    }
};