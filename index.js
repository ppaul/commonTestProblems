const openBrakets = [];

const CLOSE_BRAKET = {
  "(": ")",
  "[": "]",
  "{": "}"
};

function isOpenBraket(c) {
  return c === "(" || c === "[" || c === "{";
}

function isCloseBraket(c) {
  return c === ")" || c === "]" || c === "}";
}

function isValid(sequence) {
  for (let i = 0; i < sequence.length; i += 1) {
    const c = sequence[i];
    if (isOpenBraket(c)) {
      openBrakets.push(c);
    }

    if (isCloseBraket(c)) {
      const braketToClose = CLOSE_BRAKET[openBrakets.pop()];
      if (c !== braketToClose) {
        return false;
      }
    }
  }

  console.log(openBrakets);
  return openBrakets.length === 0;
}

module.exports = isValid;
