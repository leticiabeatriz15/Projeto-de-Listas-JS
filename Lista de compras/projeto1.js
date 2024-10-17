//Abaixo está todas as funções que serão selecionadas nas opções pelo usuário
//OBS.: Todos os prompts abaixo é utilizado o .trim(), pois a formatação da máquina em que foi criado esse código(PC com sistema operacional Windows) nescessita...

function adiciona(){
    const item = prompt('O que você deseja adicionar na sua lista de compras?\n').trim().toLowerCase();

    listadecompras.push(item)

    console.log('\nItem adiconado!')
    exiba()
};

function remove(){ 
    exiba()
    const item = prompt('Que item voce deseja remover da sua lista de compras?\n').trim().toLowerCase();
    
    const itemremove = listadecompras.findIndex((prod) => prod === item);
    
    if(itemremove > -1){
        listadecompras.splice(itemremove, 1)
        console.log('\nItem removido de sua lista!')
        exiba()
    }
    else{
        console.log('\x1b[31m\x1b[1m Esse item não existe na sua lista!\x1b[0m')
    }
    
};

function pesquisa(){
    const pesquise = prompt('Que produto você deseja encontrar na sua lista de compras?\n--> ').trim().toLowerCase()
    
    listadecompras.includes(pesquise) === true? console.log('\nEste item está na sua lista!') : console.log('\n\x1b[31m\x1b[1mEsse item não existe na sua lista!\x1b[0m');
};

function organize(){
    listadecompras.sort((a, b) => a.localeCompare(b))
    console.log('Organizada!\n')
    exiba()
};

function exiba(){
    
    console.log('Sua lista está assim:')
    for(let i = 0; i < listadecompras.length; i++){
        let produto = listadecompras[i].charAt(0).toUpperCase() + listadecompras[i].slice(1).toLowerCase() //Essa variável padroniza as palavras para que fique a primeira letra maiúscula e o restante minúscula
        console.log(`   \x1b[34m ${i+1}° - ${produto} \x1b[0m`)

    }
};

function limpa(){
    listadecompras.splice(0, listadecompras.length)
}



//Lista de compras que será alterada conforme o pedido do usuário
const listadecompras = []

//Laço de repetição
let repete = true
while(repete == true){

    const opc = Number(prompt(`
        Lista de compras 

    1 - Adicionar item na lista de compras
    2 - Remover um item da lista de compras
    3 - Pesquisar um item na sua lista de compras
    4 - Organizar a lista de compras por ordem alfabética
    5 - Exibir lista de compras
    6 - Limpar a sua lista
    7 - Encerrar o programa
    --> `));

    switch(opc){
        case 1:
            adiciona()
            break;
        case 2:
            remove()
            break;
        case 3:
            pesquisa()
            break;
        case 4:
            organize()
            break;
        case 5:
            exiba()
            break;
        case 6:
            limpa()
            break;
        default:
            repete = false
            console.log('Programa encerrado!\nAté a próxima vez.')
    }

}