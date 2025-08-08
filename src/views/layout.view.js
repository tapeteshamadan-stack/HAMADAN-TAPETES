export const LayoutView = {
    render(content) {
     const app = document.getElementById('app-root');
     app.innerHTML = `
            <div class="min-h-screen bg-gray-100">
    <nav class="flex justify-between items-center bg-black text-white px-6 py-3 rounded mb-6">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <div class="text-xl font-semibold" style="display: flex; align-items: center;"><img src="../uploads/logo.jpg" align="right" hspace="8" margin:"60px 0; alt="LOGO HAMADAN"><p>HAMADAN TAPETES</div>
            <div class="space-x-4">
    <a href="#dashboard" class="font-bold"><i class="fas fa-chart-line"></i> Dashboard</a>
    <a href="#clients" class="font-bold"><i class="fas fa-users"></i> Clientes</a>
    <a href="#orders" class="font-bold"><i class="fas fa-receipt"></i> Pedidos</a>
    <a href="#services" class="font-bold"><i class="fas fa-brush"></i> Serviços</a>
    <a href="#carpets" class="font-bold"><i class="fas fa-ticket"></i> Tapetes</a>
    <a href="#config" class="font-bold"><i class="fas fa-cog"></i> Configurações</a>
    <a href="#" id="logout-link" class="text-black bg-yellow-100 hover:underline border border-gray-400 px-3 py-1 rounded">FECHAR APP</a>
            </div>
    </nav>
                <main id="app-content" class="max-w-7xl mx-auto px-4">
                    ${content}
                </main>
          <!-- Rodapé -->
 
             </div>        
        <footer class="bg-black text-white p-4 text-center mt-8 position:sticky bottom:0 width: 100%" >
            <div class="container mx-auto">
                <p>&copy; 2025 -  HAMADAN TAPETES - Rua Professor Lemos Brito nº450 - Barra, Salvador - BA, 40140-090 - Contato (71) 99272-8442</p>
		<P>&copy; Todos os direitos reservados - Desenvolvido por Massimo Santos - massimo.santos@gmail.com.</p>
            </div>
        </footer> 

        `;

        const logout = document.getElementById('logout-link');
        if (logout) {
            logout.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('token');
                window.location.hash = '#login';
                window.location.reload();
            });
        }
    }

};