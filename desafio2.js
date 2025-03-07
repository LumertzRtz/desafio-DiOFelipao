function calcularVitorias( Vitoria, Derrota) {
    let PdV = Vitoria - Derrota
 
 
 let Rank ;
 if (Vitoria <= 10) {
     Rank = "Ferro";
 } else if (Vitoria >= 11 && Vitoria <= 20) {
     Rank = "Bronze";
 } else if  (Vitoria >= 21 && Vitoria <= 50) {
     Rank = "Prata";
 } else if ( Vitoria >= 51 && Vitoria <= 80) {
     Rank = "Ouro";
 } else if (Vitoria >= 81 &&  Vitoria <= 90) {
     Rank = "Diamante";
 } else if (Vitoria >= 91 &&  Vitoria <= 100) {
     Rank = "Lendário";
 }else if (Vitoria >= 101) {
     Rank = "Imortal";
 }
 
 return `Você passou por muitas batalhas árduas conseguindo o saldo de ${PdV} Pontos de Vitoria e atingiu 
 o Ranque ${Rank}.`;
 
}

console.log(calcularVitorias(160, 49))