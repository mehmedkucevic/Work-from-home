// parni brojevi

function extractEvenNumbers(brojevi) {
  const parniBrojevi1 = [];

  let i = 0;

  while (i < brojevi.length) {
    if (brojevi[i] % 2 === 0) {
      parniBrojevi1.push(brojevi[i]);
    }

    i++;
  }

  return parniBrojevi1;
}
const brojevi1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parniBrojevi2 = extractEvenNumbers(brojevi1);
console.log(parniBrojevi2);


// neparni brojevi

function extractOddNumbers(brojevi) {
  const neparni = [];

  let i = 0;

  while (i < brojevi.length) {
    if (brojevi[i] % 2 !== 0) {
      neparni.push(brojevi[i]);
    }
    i++;
  }

  return neparni;
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const neparniNum = extractOddNumbers(num);

console.log(neparniNum);
