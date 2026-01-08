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
