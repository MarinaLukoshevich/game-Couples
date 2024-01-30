export function createCard(defaultCardIcon, flipCardIcon) {
  const $card = document.createElement('div')
  const $closeCardI = document.createElement('i')
  const $openCardI = document.createElement('i')

  $card.classList.add('card')
  $closeCardI.classList.add('icon-close', 'fa', `fa-${defaultCardIcon}`) // 'fa', `fa-... конструкция для библиотеки со шрифт-иконками
  $openCardI.classList.add('icon-open', 'fa', `fa-${flipCardIcon}`)

  $card.append($closeCardI, $openCardI)
  return $card;
}
