alert("Olá curioso");
let nomedocurió = "";
let elemento = document.querySelector('#nomedocurió')

while(nomedocurió == ""){
    nomedocurió = prompt("Qual o seu nome curioso?");
}

if(nomedocurió == null){
    elemento.textContent = "Seja bem-vindo anônimo curioso!";
} else{
    elemento.textContent = nomedocurió;
}

