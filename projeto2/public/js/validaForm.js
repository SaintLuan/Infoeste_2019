function limpaCampos(){
    $('#codigo').val('');
    $('#nome').val('');
    $('#email').val('');
    $('#cursos').val('');
    $('#mensagem').val('');
}

function validar(){

    let codigo=$('#codigo').val();
    if(codigo=='' || codigo<=0){
        $('#codigo').addClass('erro');
        return;
    }
    $('#codigo').removeClass('erro');

    let nome=$('#nome').val();
    if(nome.trim()=='' || nome.length>11){
        $('#nome').addClass('erro');
        return;
    }
    $('#nome').removeClass('erro');

    let cursos=$('#cursos').val();
    if(cursos==''){
        $('#cursos').addClass('erro');
        return;
    }
    $('#cursos').removeClass('erro');

    addTable(codigo, nome, cursos);
    limpaCampos();
    
}

function addTable(c,n,cu){
    $('tbody').append(`
        <tr id='${c}#${n}#${cu}'>
            <td>${c}</td>
            <td>${n}</td>
            <td onclick="removeTabela(this)">X</td>
            <td onclick="alt(this)">A</td>
        </tr>`
    );
}

function removeTabela(td){
    $(td.closest('tr')).remove();
}

function alt(td){
    let data=td.closest('tr').id.split('#');

    $('#codigo').val(data[0]);
    $('#nome').val(data[1]);
    $('#cursos').val(data[2]);
 
}