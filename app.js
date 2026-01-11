const refreshBtn = document.getElementById('refreshBtn');
const transferBtn = document.getElementById('transferBtn');
const emptyState = document.getElementById('emptyState');
const ticket = document.getElementById('ticket');
const month = document.getElementById('month');

// 🔹 FUNCIONES
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

// 🔹 AL CARGAR LA PÁGINA
window.onload = () => {
  const tieneEntrada = localStorage.getItem('tieneEntrada');

  if (tieneEntrada === 'false') {
    ocultarEntrada();
  } else {
    mostrarEntrada();
  }
};

// 🔹 ACTUALIZAR
refreshBtn.addEventListener('click', () => {
  refreshBtn.innerText = 'Actualizando...';

  setTimeout(() => {
    mostrarEntrada();
    refreshBtn.innerText = 'Actualizar';
  }, 1200);
});

// 🔹 TRANSFERIR
transferBtn.addEventListener('click', () => {
  const correo = prompt('Correo del destinatario');

  if (correo) {
    alert('Entrada transferida a ' + correo);
    ocultarEntrada();
  }
});

function openSelect() {
  document.getElementById('selectScreen').style.display = 'block';
}

function closeSelect() {
  document.getElementById('selectScreen').style.display = 'none';
}

function toggleEntry(el) {
  el.classList.toggle('selected');
}

function openMethods() {
  document.getElementById('selectScreen').style.display = 'none';
  document.getElementById('methodsScreen').style.display = 'block';
}

function confirmTransfer() {
  document.getElementById('methodsScreen').style.display = 'none';
  document.getElementById('successScreen').style.display = 'block';
}
let selectedEntry = null;

function openSelect() {
  document.getElementById('selectScreen').style.display = 'block';
}

function closeSelect() {
  document.getElementById('selectScreen').style.display = 'none';
}

function toggleEntry(el) {
  document.querySelectorAll('.entry').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  selectedEntry = el;
}

function openMethods() {
  if (!selectedEntry) return;
  document.getElementById('selectScreen').style.display = 'none';

  // MARCAR COMO TRANSFERIDA
  selectedEntry.classList.remove('selected');
  selectedEntry.classList.add('transferred');

  // cerrar flujo
  setTimeout(() => {
    closeSelect();
  }, 200);
}



