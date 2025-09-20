document.addEventListener('DOMContentLoaded', function () {

  // Filtros de proyectos (usando classList en lugar de data-*)
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      // Quitar la clase activa de todos los botones
      document.querySelectorAll('.filters button').forEach(b=>{
        b.classList.remove('active');
      });

      // Activar el botón seleccionado
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.project').forEach(p => {
        if (filter === 'all' || p.classList.contains(filter)) {
          p.style.display = '';
        } else {
          p.style.display = 'none';
        }
      });
    });
  });
});
