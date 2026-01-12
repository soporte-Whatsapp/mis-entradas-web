const refreshBtn = document.getElementById('refreshBtn');
const transferBtn = document.getElementById('transferBtn');
const emptyState = document.getElementById('emptyState');
const ticket = document.getElementById('ticket');
const month = document.getElementById('month');

// ==================
// MOSTRAR / OCULTAR ENTRADA
// ==================
function mostrarEntrada() {
  emptyState.style.display = 'none';
  ticket.style.display = 'flex';
  month.style.display = 'block';
  localStorage.setItem('tieneEntrada', 'true');
}

function ocultarEntrada() {
  ticket.style.display = 'none';
  month.style.display = 'none';
  emptyState.style.display = 'block';
  localStorage.setItem('tieneEntrada', 'false');
}

// ==================
// AL CARGAR
// ==================
window.onload = () => {
  const tieneEntrada = localStorage.getItem('tieneEntrada');

  if (tieneEntrada === 'false') {
    ocultarEntrada();
  } else {
    mostrarEntrada();
  }
};

// ==================
// ACTUALIZAR
// ==================
refreshBtn.addEventListener('click', () => {
  refreshBtn.innerText = 'Actualizando...';

  setTimeout(() => {
    mostrarEntrada();
    refreshBtn.innerText = 'Actualizar';
  }, 1200);
});

// ==================
// FLUJO TRANSFERENCIA
// ==================
let selectedEntry = null;

function openSelect() {
  document.getElementById('selectScreen').style.display = 'block';
}

function closeSelect() {
  document.getElementById('selectScreen').style.display = 'none';
}

function toggleEntry(el) {
  document.querySelectorAll('.entry').forEach(e =>
    e.classList.remove('selected')
  );
  el.classList.add('selected');
  selectedEntry = el;
}

function openMethods() {
  if (!selectedEntry) return;

  document.getElementById('selectScreen').style.display = 'none';
  document.getElementById('methodsScreen').style.display = 'block';
}

function confirmTransfer() {
  document.getElementById('methodsScreen').style.display = 'none';

  // 🔥 MARCAR LA ENTRADA PRINCIPAL COMO TRANSFERIDA
  ticket.classList.add('transferred');

  // cerrar todo
  setTimeout(() => {
    closeSelect();
  }, 200);
}



