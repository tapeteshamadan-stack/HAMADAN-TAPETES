import { LayoutView } from '../views/layout.view.js';

export const ConfigController = {
    render() {
        const html = `
            <h1 class="text-3xl font-bold mb-6">Configurações</h1>
            <p class="text-gray-600">Aqui você pode configurar as preferências do sistema.</p>
        `;
        LayoutView.render(html);
    }
};