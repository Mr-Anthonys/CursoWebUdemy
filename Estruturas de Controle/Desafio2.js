/*
# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


function saldoRanked(vitoria, derrota) {
    let saldo = (vitoria - derrota);

    return saldo;
}


function calculaNivel() {
    let level;
    if (saldo < 10) {
        level = 'Ferro';
    } else if (saldo >= 11 && saldo <= 20) {
        level = 'Bronze'
    } else if (saldo >= 21 && saldo <= 50) {
        level = 'Prata'
    } else if (saldo >= 51 && saldo <= 80) {
        level = 'Ouro'
    } else if (saldo >= 81 && saldo <= 90) {
        level = 'Diamante'
    } else {
        level = 'Radiante'
    }

    return level;
}


//Aqui se altera como (Vitoria, Derrota)
let saldo = saldoRanked(1000, 30);

//Aqui se calcula o nivel de acordo com o saldo
let level = calculaNivel()
console.log(`O heroi tem saldo de ${saldo} e esta no level ${calculaNivel()}`)