const form = document.getElementById('formatividade');
const imgAprovado = '<img src="./img/aprovado.png" alt="Emoji Celebrando"/>';
const imgReprovado = '<img src="./img/reprovado.png" alt="Emoji Triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class ="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class ="resultado reprovado">Reprovado</span>';
let linhas = ' '; 



form.addEventListener('submit', function(e) { 
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela(); 
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>'; 
    linha += `<td>${inputNomeAtividade.value}</td>`;   
    linha += `<td>${inputNotaAtividade.value}</td>`;    
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`; 
    linha += `</tr>` 

    linhas += linha; 

    inputNomeAtividade.value = ''; 
    inputNotaAtividade.value = '';
}

function atualizaTabela(){ 
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}

function atualizaMediaFinal() { 
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado ;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;
    for (const element of notas) {
      somaDasNotas += element;
    }
    return (somaDasNotas / notas.length).toFixed(1);

}


  