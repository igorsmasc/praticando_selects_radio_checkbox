function salvar() {
    var categoria = document.getElementById('categoria').value;
    var ingredientes = document.getElementById('ingredientes');
    var dificuldade = document.querySelector('input[name="dificuldade"]:checked');
    var checkbox = document.querySelectorAll('input[name="checkbox"]:checked');
    var ingredientesList = '';

console.log(categoria)

    if(categoria == '' || checkbox.length == 0 || ingredientes.options.length == 0 || dificuldade == null) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    for (var i = 0; i < ingredientes.options.length; i++) {
        if (ingredientes.options[i].selected) {
            ingredientesList += ingredientes.options[i].value + ', ';
        }
    }
    ingredientesList = ingredientesList.slice(0, -2);
    
    if (dificuldade !== null) {
        dificuldade = dificuldade.value;
    }
    
    var preparoList = '' + checkbox[0].value
    for (var i = 1; i < checkbox.length; i++) {
        preparoList +=  ', ' + checkbox[i].value;
    }

    var tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    var newRow = tabela.insertRow();
    var idRow = newRow.insertCell(0);
    var categoriaRow = newRow.insertCell(1);
    var ingredientesRow = newRow.insertCell(2);
    var preparoRow = newRow.insertCell(3);
    var dificuldadeRow = newRow.insertCell(4);
    idRow.innerHTML = tabela.rows.length;
    categoriaRow.innerHTML = categoria;
    ingredientesRow.innerHTML = ingredientesList;
    preparoRow.innerHTML = preparoList;
    dificuldadeRow.innerHTML = dificuldade;
}
