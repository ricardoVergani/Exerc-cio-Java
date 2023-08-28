const salarios = [1500, 2200, 1800, 2500, 1900, 2100, 1700, 3000, 2300, 2800];


// PARTE 1


const salariosNovos = salarios.map(salario =>{
    if (salario <= 2000){
        return salario * 1.15;
    } else {
        return salario * 1.10;
    }
})

console.log(salariosNovos);


// PARTE 2

const salariosMaiores2500 = salariosNovos.filter(salario => salario > 2500);

console.log(salariosMaiores2500)


// PARTE 3

const salarioSoma = salariosMaiores2500.reduce((somatorio, salario) => somatorio + salario, 0);

console.log(salarioSoma);