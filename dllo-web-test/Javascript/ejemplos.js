// Comentario de linea
/* Comentario de bloque*/
const Persona = {
  edad: 55,
  nombre: "Juan",
  esEstudiante: false,
  altura: 170,
  semestres: [],
  materiaPreferida: {
    nombre: "calculo",
    id: 0,
  },
  universidad: null,
  carrera: undefined,
};

const fibo = (n) => {
  if (n == 1) {
    return 1;
  }
  if (n == 0) {
    return 0;
  }
  return fibo(n - 1) + fibo(n - 2);
};

const isPalindrome = (text) => {
  let textArray = [];

  for (letter of text) {
    textArray.push(letter);
  }
  textArray.reverse();

  return text == textArray.join("");
};
console.log(fibo(0));
console.log(isPalindrome("alo"));

const conversorRomanToArabic = (romanNum) => {
  let mapping = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let count = 0;
  let array = romanNum.split("").map((val) => {
    return mapping.get(val);
  });
  while (array.length > 0) {
    if (array.length % 2 == 0) {
      let first = array.shift();
      let second = array.shift();
      count += first < second ? second - first : second + first;
    } else {
      count += array.shift();
    }
  }
  return count;
};
console.log(conversorRomanToArabic("LXXV"));
