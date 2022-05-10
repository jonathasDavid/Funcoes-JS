function aprensentar(nome){
  return `Meu nome é ${nome} `;
}

// Arrow function
const aprentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de 1 linha de isntrução

const multiplicaNumPequenos = (num1, num2) =>{
  if (num1 || num2 > 10){
    return "Somente numeros de 1 a 9"
  }else{
    return num1 * num2;
  }
}
