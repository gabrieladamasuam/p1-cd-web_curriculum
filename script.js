function filtrar(filtro) {
  // Quitar la clase activa de todos los botones
  var botones = document.getElementsByTagName('button');
  for (var i = 0; i < botones.length; i++) {
    botones[i].classList.remove('active');
  }

  // Activar el botón que coincide con el filtro
  for (var i = 0; i < botones.length; i++) {
    if (botones[i].textContent.trim().toLowerCase() === filtro) {
      botones[i].classList.add('active');
    }
  }

  // Mostrar/ocultar proyectos según la clase
  var proyectos = document.getElementsByClassName('project');
  for (var j = 0; j < proyectos.length; j++) {
    if (filtro === 'todos' || proyectos[j].classList.contains(filtro)) {
      proyectos[j].style.display = '';
    } else {
      proyectos[j].style.display = 'none';
    }
  }
}
