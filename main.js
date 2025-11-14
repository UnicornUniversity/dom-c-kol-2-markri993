/**
 * Převod čísla z desítkové soustavy do dvojkové.
 * @param {string} inputNumber - požadované číslo k převodu
 * @returns {string} dvojková podoba vstupního čísla
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

  // převod z desítkové do dvojkové soustavy (původní algoritmus z Domácího úkolu 1)
  while (currentValue > 0) {
    if (currentValue % 2 === 1) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;


