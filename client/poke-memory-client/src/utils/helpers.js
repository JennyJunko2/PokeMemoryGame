export const makeFirstLetterUpper = (words) => {
  return words.charAt(0).toUpperCase() + words.slice(1)
}

export const shuffleCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}