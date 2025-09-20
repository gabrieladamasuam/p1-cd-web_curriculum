document.addEventListener('DOMContentLoaded', function () {
  // Modo oscuro eliminado para simplificar el código

  // Filtros de proyectos (arreglado para manejar espacios y comparación robusta)
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class / aria-selected
      document.querySelectorAll('.filters button').forEach(b=>{
        b.classList.remove('active');
        b.setAttribute('aria-selected','false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');

      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.project').forEach(p => {
        const raw = p.dataset.tags || '';
        const tags = raw.split(',').map(t => t.trim()).filter(Boolean);
        if (filter === 'all' || tags.includes(filter)) {
          p.style.display = '';
        } else {
          p.style.display = 'none';
        }
      });
    });
  });

});