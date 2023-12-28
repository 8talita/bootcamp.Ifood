function matches(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
  }
  
  function rank() {
    let resultadoRank = matches(65, 50)
    let nivel = ""
    if (resultadoRank <= 10) {
      nivel = "Ferro"
    } else if (resultadoRank <= 20) {
      nivel = "Bronze"
    } else if (resultadoRank <= 50) {
      nivel = "Prata"
    } else if (resultadoRank <= 80) {
      nivel = "Ouro"
    } else if (resultadoRank <= 90) {
      nivel = "Diamante"
    } else if (resultadoRank <= 100) {
      nivel = "Lendário"
    } else if (resultadoRank >= 100) {
      nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${resultadoRank} e está no nível de ${nivel}`
  }
  
  console.log(rank())