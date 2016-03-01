var pigLatin = function(inputWord) {
  if ((inputWord[0] === 'a') || (inputWord[0] === 'e') || (inputWord[0] === 'i') || (inputWord[0] === 'o') || (inputWord[0] === 'u')) {
    return inputWord + "ay";
  }

  else if (((inputWord[0] !== 'a') || (inputWord[0] !== 'e') || (inputWord[0] !== 'i') || (inputWord[0] !== 'o') || (inputWord[0] !== 'u')) && ((inputWord[1] !== 'a') || (inputWord[1] !== 'e') || (inputWord[1] !== 'i') || (inputWord[1] !== 'o') || (inputWord[1] !== 'u'))) {
    return inputWord.slice(2) + inputWord[0] + inputWord[1] + "ay";
  }

  else if (inputWord[0] === 'q') {
    return inputWord.slice(2) + inputWord[0] + inputWord[1] + "ay";
  }

  else if (inputWord[1] === 'q') {
    return inputWord.slice(3) + inputWord[0] + inputWord[1] + inputWord[2] + "ay";
  }

  else {
    return inputWord.slice(1) + inputWord[0] + "ay";
  }
};
