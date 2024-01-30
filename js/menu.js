import {newGame} from './newGame.js'

export function createMenu() {
  const $confetti = document.querySelector('.confetti')
  const $container = document.querySelector('.section__container')
  const $title = document.createElement('h2')

  $title.classList.add('section__title')

  $confetti.textContent = null;
  $container.textContent = null; // отчистим для перезапуска
  $title.textContent = 'Выбор сложности';


  function createBtnLevels(cardsQt) { // Qt: quantity-количество
    const $btn = document.createElement('button')
    $btn.classList.add('section__btn-level')
    $btn.textContent = `${cardsQt} карт`;

    $btn.onclick = () => {
      newGame(cardsQt)
    }

    return $btn
  }


  $container.append(
    $title,
    createBtnLevels(4),
    createBtnLevels(8),
    createBtnLevels(12),
    createBtnLevels(16),
    createBtnLevels(20),
  )
}





