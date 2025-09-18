// script.js - Interactividad mínima: tema + filtros + inicialización de barras
document.addEventListener('DOMContentLoaded', function () {

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

  // Inicializar barras de habilidad con el data-level (usando variable CSS --level)
  document.querySelectorAll('#skills li').forEach(li => {
    const level = Math.max(0, Math.min(100, parseInt(li.dataset.level || '0', 10)));
    // establecer la variable CSS usada por ::after
    li.style.setProperty('--level', `${level}%`);
    // accesibilidad: añadir aria-valuenow como referencia
    li.setAttribute('role', 'progressbar');
    li.setAttribute('aria-valuemin', '0');
    li.setAttribute('aria-valuemax', '100');
    li.setAttribute('aria-valuenow', String(level));
  });
});
