let idade, ano, mes, dia, nome;

const anoa= 2024, mesa= 03

ano= prompt("insira ano")
mes= prompt("insira mês")
dia= prompt("insira dia")
nome= prompt("insira seu nome")


idade=anoa-ano

if(mes<mesa){
    alert(nome+"sua idade é" +idade)
} else{
    alert (nome + "sua idade é" +(idade-1))
}
