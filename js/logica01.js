// Aula inicial de Lógica de programação com Javascript

alert('Helo World');

function saudacao(){
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if ( idade <= 11){
        alert(`${nome} você esta na categoria infantil`)
    }else if( idade >11 && idade <= 17){
        alert(`${nome} você esta na categoria juvenil`)
    }else if( idade >= 18 && idade <= 35){
        alert(`${nome} você esta na categoria senior`)
    }else {
        alert(`${nome} você esta na categoria master`)
    }

}