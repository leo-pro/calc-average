const readline = require('readline-sync')

function start(res){

    while(res == true){

        const aluno = {}

        aluno.nome = getNome();
        aluno.idade = getIdade();
        aluno.notaFinal = calcularNotas();

        function getNome(){
            return readline.question("Informe o nome do Aluno: ");
        }

        function getIdade(){
            return readline.question("Informe a idade do Aluno: ");
        }

        function calcularNotas(){
            nota1 = readline.question("Informe a nota do 1 Bimestre: ");
            nota2 = readline.question("Informe a nota do 2 Bimestre: ");
            return (nota1 + nota2) / 2;
        }

        console.log(aluno);

        if(readline.keyInYN("Deseja calcular outra Média?")){
            res = true;
        }
        else{
            res = false;
        }
    }
}

start(true)
