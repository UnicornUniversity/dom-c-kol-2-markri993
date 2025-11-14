/**
 * Převod čísla z desítkové soustavy do dvojkové.
 * @param {string} inputNumber - číslo k převodu
 * @returns {string} binární podoba vstupního čísla
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {

  // převedeme vstupní text na číslo
  let decimal = Number(inputNumber);
  let currentValue = decimal;
  let binary = "";

  // zvláštní případ: 0
  if (currentValue === 0) {
    return "0";
  }

  // převod 10 → 2 (původní algoritmus z DÚ1)
  while (currentValue > 0) {
    if (currentValue % 2 === 1) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;
    }
    currentValue = Math.floor(currentValue / 2);
  }

  return binary;
}

export function permittedInputSystems() {
  return [10];
}

export function permittedOutputSystems() {
  return [2];
}

