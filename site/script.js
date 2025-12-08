
// Toggle do menu mobile com acessibilidade
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  function openMenu(){
    menu.classList.add('show');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu(){
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu(){
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  }

  if(toggle && menu){
    toggle.addEventListener('click', toggleMenu);

    // Fecha ao clicar fora
    document.addEventListener('click', function(ev){
      const isClickInside = menu.contains(ev.target) || toggle.contains(ev.target);
      if(!isClickInside){ closeMenu(); }
    });

    // Fecha com Esc
    document.addEventListener('keydown', function(ev){
      if(ev.key === 'Escape'){ closeMenu(); }
    });

    // Ajusta ao redimensionar: garante menu fechado em desktop
    window.addEventListener('resize', function(){
      if(window.innerWidth > 760){ closeMenu(); }
    });
  }
})();
