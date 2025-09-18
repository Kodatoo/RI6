import * as readLine from 'readline'
import Multiplicacao from './multiplicacao'
import Soma from './soma'
import Subtracao from './subtracao'
import Divisao from './divisao'
import Potenciacao from './potenciacao'
import Radiciacao from './radiciacao'


let mensagens = new Mensagens()

let iniciar = () =>{
    let leitor = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    leitor.question(`Quais são seus números e as operações desejada \n`, (valor) => {
        let instrucoes = valor.split(' ')
        let numero1  = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])
        let operacao = instrucoes[2]
        if (instrucoes.length == 1){
            operacao = instrucoes[0]
        }
        console.log(`Estas foram suas instruções: ${instrucoes}\n `)

        switch (operacao){
            case 'Somar':
                let calculo = new Soma()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;
            case 'Subtrair':
                calculo = new Subtracao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;
            case 'Multiplicar':
                calculo = new Multiplicacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;
            case 'Divisao':
                calculo = new Divisao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'Potenciacao':
                calculo = new Potenciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'Radiciacao':
                calculo = new Radiciacao()
                console.log(`O resultado da é operação: ${calculo.calcular(numero1, numero2)}\n  `)
        }
    })
    
    
}

