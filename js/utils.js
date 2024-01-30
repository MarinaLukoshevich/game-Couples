export function createIconsArr(chooseLevel) {
  const cardsIconsArr = [
    'hotdog',
    'candy-cane',
    'mug-hot',
    'pizza-slice',
    'burger',
    'drumstick-bite',
    'cake-candles',
    'fish-fins',
    'bowl-rice',
    'carrot',
  ];
  switch (chooseLevel) {
    case 4:
      return cardsIconsArr.slice(0, 2);
    case 8:
      return cardsIconsArr.slice(0, 4);
    case 12:
      return cardsIconsArr.slice(0, 6);
    case 16:
      return cardsIconsArr.slice(0, 8);
    case 20:
      return cardsIconsArr;
    default:
      break;
  }
}



export const duplicateArr = (array) => array.reduce((res, current) => res.concat([current, current]), []);



export const shuffleArr = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}




