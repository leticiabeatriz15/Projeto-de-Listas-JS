//Abaixo está todas as funções que serão selecionadas nas opções pelo usuário
//OBS.: Todos os prompts abaixo é utilizado o .trim(), pois a formatação da máquina em que foi criado esse código(PC com sistema operacional Windows) nescessita...

function adiciona(){

    const filme = prompt('Que filme deseja adicionar na lista?\n--> ').trim().toLowerCase();
    const data = Number(prompt('Qual foi o ano de lançamento?\n--> ').trim())

    ListaDeFilmes.push({nome: filme, ano: data})
    console.log('\n\x1b[32mFilme adicionado!\x1b[0m')
    exibe()
};

function organize(){

    const tipo = Number(prompt('Como você deseja organizar a sua lista?\n1 - Pelo nome\n2 - Pelo ano de lançamento\n--> ').trim());
    tipo === 2 ? ListaDeFilmes.sort((a, b) => a.ano - b.ano) : ListaDeFilmes.sort((a, b) => a.nome.localeCompare(b.nome));

    console.log(`\x1b[32mSua lista de filmes foi organizada!\x1b[0m`)
    exibe()

};

function pesquisa(){
    const pesquise = prompt('Que filme você deseja encontrar na sua lista?\n--> ').trim().toLowerCase();

    if(ListaDeFilmes.findIndex((filme) => filme.nome == pesquise) > -1){
        
        console.log('\n\x1b[32mO filme está na sua lista!\x1b[0m')
    }else{
            console.log('\n\x1b[31mFilme não encontrado!\x1b[0m')
        }
    
};

function exibe(){
    console.log('\n\x1b[1m\x1b[36mLista de filmes para assistir\x1b[0m\x1b[0m')

    const exibir = []
    for(let i = 0; i < ListaDeFilmes.length; i++){       
        let filme = ListaDeFilmes[i].nome.charAt(0).toUpperCase() + ListaDeFilmes[i].nome.slice(1).toLowerCase() //Essa variável padroniza as palavras para que fique a primeira letra maiúscula e o restante minúscula

        exibir.push({'\x1b[35m\x1b[4mNomes dos Filmes\x1b[0m\x1b[0m': filme, '\x1b[35m\x1b[4mAno de lançamento\x1b[0m\x1b[0m': ListaDeFilmes[i].ano})
    }
    console.table(exibir)

    //Lista de filmes assistidos
    if(FilmesAssistidos.length >0){
        console.log('\n\x1b[1m\x1b[36mLista de filmes assistidos\x1b[0m\x1b[0m')

        const mostrar = []
        for(let i = 0; i < FilmesAssistidos.length; i++){       
            let filme = FilmesAssistidos[i].nome.charAt(0).toUpperCase() + FilmesAssistidos[i].nome.slice(1).toLowerCase() //Essa variável padroniza as palavras para que fique a primeira letra maiúscula e o restante minúscula

            mostrar.push({'\x1b[35m\x1b[4mNomes dos Filmes\x1b[0m\x1b[0m': filme, '\x1b[35m\x1b[4mAno de lançamento\x1b[0m\x1b[0m': FilmesAssistidos[i].ano})
        }
        console.table(mostrar)
    }
}

function assistido(){

    exibe()
    const filme = prompt('Qual filme você já assistiu?\n--> ').trim().toLowerCase();

    const busca = ListaDeFilmes.findIndex((titulo) => titulo.nome == filme)
    if( busca > -1){

        FilmesAssistidos.push(ListaDeFilmes[busca])
        ListaDeFilmes.splice(busca, 1)
        exibe()

    }else{
            console.log('\x1b[31mFilme não encontrado!\x1b[0m')
    }

}

function apagatudo(){
    ListaDeFilmes.splice(0, ListaDeFilmes.length)
    console.log('\n\x1b[31mLISTA APAGADA!\x1b[0m')
}


let ListaDeFilmes = []

let FilmesAssistidos = []

//Laço de repetição
let repete = true
while(repete == true){

    const opc = Number(prompt(`
    \x1b[34m\x1b[4mLISTA DE FILMES\x1b[0m\x1b[0m

    1 - Adicionar filme com o ano de lançamento na sua lista
    2 - Organizar sua lista de filmes
    3 - Pesquisar um filme
    4 - Exibir lista de filmes
    5 - Marcar filme como assistido
    6 - Remover Filme da sua lista
    7 - Apagar sua lista de filmes não assistidos
    8 - Encerrar o programa
    --> `));

    switch(opc){
        case 1:
            adiciona()
            break;
        case 2:
            organize()
            break;
        case 3:
            pesquisa()
            break;
        case 4:
            exibe()
            break;
        case 5:
            assistido()
            break;
        case 6 :
            remove()
            break;
        case 7:
            apagatudo()
            break;
        default:
            repete = false
            console.log('Programa encerrado!\nAté a próxima vez.')
    }
}