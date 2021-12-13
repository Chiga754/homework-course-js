// ! Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

const dropdownItems = document.querySelectorAll('.dropdown-item');
    let currentOpenedMenu = null;

    function toggleDropdownMenu(e) {
      const menu = e.currentTarget.querySelector('.dropdown-menu');
      const isAdded = menu.classList.toggle('d-none');
      if (currentOpenedMenu && currentOpenedMenu !== menu) {
        currentOpenedMenu.classList.add('d-none');
      }
      if (!isAdded) {
        currentOpenedMenu = menu;
      }
    }
    
    dropdownItems.forEach(d => d.addEventListener('click', toggleDropdownMenu));