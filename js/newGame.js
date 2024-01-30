import { createIconsArr } from './utils.js'
import { duplicateArr } from './utils.js'
import { shuffleArr } from './utils.js'
import { createCard } from './card.js'
import { createMenu } from './menu.js'
import { confetti } from './confetti.js'

export function newGame(level) {
  let firstCard = null
  let secondCard = null
  let clickable = true

  const $container = document.querySelector('.section__container')
  const $cardsWrap = document.createElement('div')
  const $btnRestart = document.createElement('button')

  $cardsWrap.classList.add('cards-wrap')
  $btnRestart.classList.add('btn-restart')

  $container.textContent = null; // отчистим для перезапуска
  $btnRestart.textContent = 'Начать заново'

  $btnRestart.onclick = () => {
    createMenu();
  }


  const cardsIcons = createIconsArr(level);
  const duplicateCardsIcons = duplicateArr(cardsIcons)
  let shuffleAllCards = shuffleArr(duplicateCardsIcons); // перемешали

  shuffleAllCards.forEach(icon => {
    $cardsWrap.append(createCard('question', icon))
  });
  $container.append($cardsWrap, $btnRestart)

  const cards = document.querySelectorAll('.card')
  cards.forEach((card, index) => {
    card.onclick = () => {
      if (clickable == true && card.classList.contains('card-success') == false) {
        card.classList.add('card-open')

        if (firstCard == null) { // 1 click
          firstCard = index // индекс карты по которой click
        } else {
          if (secondCard == null && index != firstCard) { // 2 click +
            secondCard = index
            clickable = false
          }
        }

        if (firstCard !== null && secondCard !== null) { // 2 click
          if (cards[firstCard].children[1].className === cards[secondCard].children[1].className) {
            cards[firstCard].classList.add('card-success')
            cards[secondCard].classList.add('card-success')
            firstCard = null
            secondCard = null
            clickable = true
          }
          else {
            setTimeout(() => {
              cards[firstCard].classList.remove('card-open')
              cards[secondCard].classList.remove('card-open')
              firstCard = null
              secondCard = null
              clickable = true
            }, 300)
          }
        }
      }

      if (Array.from(cards).every((card) => card.className.includes('card-success'))) { // преобразовали все дом-элементы из cards в массив
        document.querySelector('.confetti').innerHTML = confetti;
      }
    }
  });
}
