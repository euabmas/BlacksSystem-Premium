// Carregamento de dados do LocalStorage
let produtos = JSON.parse(localStorage.getItem('pp_prods')) || [];
let vendas = JSON.parse(localStorage.getItem('pp_vendas')) || [];
let chartL = null;

// Funções de Interface Comuns
function toggleSidebar() { 
    document.getElementById('sidebar').classList.toggle('active'); 
}

function manualThemeToggle() {
    const isLight = document.getElementById('themeSwitch').checked;
    if (isLight) {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    }
    if(typeof initChart === "function" && document.getElementById('toggleChart')?.checked) initChart();
}

// Persistência
function saveAndRefresh() {
    localStorage.setItem('pp_prods', JSON.stringify(produtos));
    localStorage.setItem('pp_vendas', JSON.stringify(vendas));
    if (typeof refresh === "function") refresh();
}

function resetDatabase() {
    if(confirm("ALERTA: Isso apagará TODOS os dados. Deseja continuar?")) {
        localStorage.clear();
        location.reload();
    }
}

// Inicialização do Tema ao carregar
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.getElementById('themeSwitch').checked = true;
        document.body.classList.add('light-theme');
    }
    
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        dateEl.innerText = new Date().toLocaleDateString('pt-br', { weekday:'long', day:'numeric', month:'long' });
    }
});
