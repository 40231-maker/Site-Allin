// js/app.js

// Banco de dados simulado dos profissionais da imagem
const providers = [
    { name: "Nanca Glorei", specialty: "Encanador", price: 150, rating: 4.8, avatar: "👨‍🔧" },
    { name: "Borrer Chicista", specialty: "Eletricista", price: 150, rating: 4.8, avatar: "👷" },
    { name: "Sonro Vasmos", specialty: "Encanador", price: 150, rating: 4.8, avatar: "👨" },
    { name: "Jonnn Balano", specialty: "Eletricista", price: 150, rating: 4.8, avatar: "🧔" },
    { name: "Bona Grônio", specialty: "Eletricista", price: 150, rating: 4.8, avatar: "👨‍💻" },
    { name: "Romo Berneve", specialty: "Eletricista", price: 150, rating: 4.8, avatar: "👦" },
    { name: "Alma Alonto", specialty: "Encanador", price: 150, rating: 4.8, avatar: "🧑" }
];

// Lógica para acionar a busca na página inicial
const searchInput = document.getElementById('search-input');
const btnBuscar = document.getElementById('btn-buscar');

function executarBusca() {
    if (searchInput && searchInput.value.trim() !== "") {
        window.location.href = 'loading.html';
    }
}

if (btnBuscar) btnBuscar.addEventListener('click', executarBusca);
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') executarBusca();
    });
}

// Lógica para renderizar os profissionais na página de listagem
const listContainer = document.getElementById('providers-list');
if (listContainer) {
    providers.forEach(p => {
        const item = document.createElement('div');
        item.className = 'provider-item';
        item.innerHTML = `
            <div class="avatar">${p.avatar}</div>
            <div class="provider-info">
                <div class="provider-name">${p.name}</div>
                <div class="provider-specialty">${p.specialty}</div>
            </div>
            <div class="provider-meta">
                <div class="provider-price">R$ ${p.price}/h</div>
                <div class="provider-rating">⭐ ${p.rating}</div>
            </div>
        `;
        
        // Quando clicar no prestador, salva o nome e vai para o chat
        item.addEventListener('click', () => {
            localStorage.setItem('selectedProvider', p.name);
            window.location.href = 'chat.html';
        });
        
        listContainer.appendChild(item);
    });
}