// = é atribuição
// == é para comparar valor
// === é para comparar valor e formato do conteúdo
// !== é para verificar se algo é diferente ou igual
// OPERADORES IGUAL OU DIFERENTE
let marca = "Apple"
console.log(marca !== "Sansung")


// === é para comparar valor e formato do conteúdo

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let  ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuário está barrado?" + ehCPFBloqueado)

// !== é para verificar se algo é diferente ou igual

let CPFPermitido = "222.111.222-01"
let CPFDoUsuario = "222.111.222-02"

let ehBloqueado = cpfUsuario !== CPFPermitido

console.log("é um usuário inválido?" + ehBloqueado)


// saber se é maior ou iguaal a 18 NOS

let idadeMinima = 18
let idadeUsuario = 17
let idadePermitivaValida = idadeUsuario >= idadeMinima

console.log(idadePermitivaValida)

//Comparador de menor que

let idadeDeCorte = 50
let idadeUsuario1 = 45

let resultadoEhTerceiraIdade = idadeDeCorte < idadeUsuario1

console.log(resultadoEhTerceiraIdade)

//Comparador de menor ou = a que

let idadeDeCorte2 = 50
let idadeUsuario2 = 50

let resultadoEhTerceiraidade = idadeDeCorte2 <= idadeUsuario2

console.log(resultadoEhTerceiraidade)