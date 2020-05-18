// var nome = 'Tiago Chaves'
// var idade = 34
// var idade2 = 13

// //console.log(nome)
// console.log(idade + " " + nome)


// var frutas = [{nome:"maçã", cor: "vermelha"},{nome:"uva", cor:"verde"}]

// console.log(frutas.reverse())
// alert(frutas[0].cor)


// var idade = prompt('Qual sua idade')
// if (idade >= 18) {
//     alert('maior de idade')
// }else{
//     alert('menor de idade')
// }

// var count = 0;
// while(count <= 5){
//     alert(count)
//     count++
// }

// for(count=0; count<=5; count++){
//     alert(count)
// }


// var data = new Date()
// alert(data.getDay() +"/" +data.getMonth())

// var lista = [“Alemanha”, “Inglaterra”, “Escócia”]/
// lista.push(“Polônia”);
// lista.pop(“Inglaterra”);



// var validar;
// function validarIdade(idade){
//     validar;
//     if (idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar
// }

// var idade = prompt('Qual sua idade?')
// console.log(validarIdade(idade))


function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por visitar nossa pagina</b>"
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one");
    window.location.href = "https://likedin.com";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!"
}

function funcaoChange(elemento){
    alert(elemento.value)
}

function frutas(elemento){
   var fruta = ""
    switch (elemento.value){
    case "1":
        fruta = "Laranja";
        break;
    case "2":
        fruta = "Maçã";
        break;
    case "3":
        fruta= "Uva";
        break
    }
   
    if(fruta != ""){
     alert(fruta)
    }

}






























