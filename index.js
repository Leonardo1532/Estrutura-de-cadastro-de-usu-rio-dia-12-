// 1 - Crie 2 arrays: um para nomes e um para senhas


// 2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.


// 3 - Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções.


// 4 - Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.

// 5 - Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas exiba uma mensagem de sucesso


// 6 - Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array, por fim organize o array para eliminar os espaços vazios.


let nomes = []
let senhas = []
let index = 0


let fluxo = true

while (fluxo) {

    let opcao = Number(prompt("Insira oque deseja fazer: 1 = cadastrar, 2 = fazer login, 3 = excluir um cadastro, 4 = encerrar o programa"))

    switch (opcao) {
        case 1:
            nomes[index] = prompt("Insira o nome de usuário")
            senhas[index] = (prompt("Insira uma senha"))
            index++
            console.log("Usuário cadastrado")
            break;
        case 2:
            let nome = prompt("Insira seu nome de usuário")
            let senha = (prompt("Insira sua senha"))
            let comparador = false

            for (let index = 0; index < nomes.length; index++) {
                if (nome === nomes[index] && senha === senhas[index]) {
                    comparador = true
                }
            }

            if (comparador) {
                alert("Usuário logado com sucesso")
            } else {
                alert("Nome de usuário ou senha inválida")
            }

            break;
        case 3:
            let nomesSup = []
            let senhasSup = []
            let indexSup = 0
            let nomeExcluir = prompt("Insira o nome que deseja excluir")

            for (let index = 0; index < nomes.length; index++) {
                if (nomeExcluir === nomes[index]) {
                    alert("Usuário excluido com sucesso")
                } else {
                    nomesSup[indexSup] = nomes[index]
                    senhasSup[indexSup] = senhas[index]
                    indexSup++
                }
            }
            nomes = nomesSup
            senhas = senhasSup

            break;
        case 4:
            console.log("Programa encerrado")
            fluxo = false
            break;

        default:
            alert("Opção inválida")
            break;
    }
}