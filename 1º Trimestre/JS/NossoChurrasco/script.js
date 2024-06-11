const nav_pessoas = document.querySelector(".pessoas")
const nav_carnes = document.querySelector(".carnes")
const nav_bebidas = document.querySelector(".bebidas")
const nav_vegetais = document.querySelector(".vegetais")

const div_pessoas = document.querySelector(".calculaPessoas")
const div_carnes = document.querySelector(".calculaCarnes")
const div_bebidas = document.querySelector(".calculaBebidas")
const div_vegetais = document.querySelector(".calculaVegetais")

nav_pessoas.addEventListener('click', function(e){
    e.preventDefault() /* Previne o comportamento padrão do botão (coloca sempre)*/
    div_pessoas.style.display = "flex" /* Muda o display do elemento para flex */
    div_carnes.style.display = "none"
    div_bebidas.style.display = "none"
    div_vegetais.style.display = "none"
})

nav_carnes.addEventListener('click', function(e){
    e.preventDefault()
    div_carnes.style.display = "grid"
    div_pessoas.style.display = "none"
    div_bebidas.style.display = "none"
    div_vegetais.style.display = "none"
})

nav_bebidas.addEventListener('click', function(e){
    e.preventDefault()
    div_bebidas.style.display = "grid"
    div_carnes.style.display = "none"
    div_pessoas.style.display = "none"
    div_vegetais.style.display = "none"
})

nav_vegetais.addEventListener('click', function(e){
    e.preventDefault()
    div_vegetais.style.display = "grid"
    div_carnes.style.display = "none"
    div_bebidas.style.display = "none"
    div_pessoas.style.display = "none"
})


var homens = document.querySelector(".h")
var mulheres = document.querySelector(".m")
var criancas = document.querySelector(".c")

const enviarPessoas = document.querySelector(".enviar")
enviarPessoas.addEventListener("click", function(e){
    e.preventDefault() 
    homens = parseInt(homens.value)
    mulheres = parseInt(mulheres.value)
    criancas = parseInt(criancas.value)
})

var gado = document.querySelector(".gado")
var frango = document.querySelector(".frango")
var porco = document.querySelector(".porco")

const enviarCarnes = document.querySelector(".enviarCarnes")
enviarCarnes.addEventListener("click", function(e){
    e.preventDefault()
    gado = gado.checked
    frango = frango.checked
    porco = porco.checked

    if (gado){
        gado = homens*300 + mulheres*200 + criancas*100
    }
    
    if (frango){
        frango = homens*300 + mulheres*200 + criancas*100
    }
    
    if (porco){
        porco = homens*300 + mulheres*200 + criancas*100
    }
    
    alert("Compre "+gado+" gramas de gado, "+frango+" gramas de frango e "+porco+" gramas de porco")
})

