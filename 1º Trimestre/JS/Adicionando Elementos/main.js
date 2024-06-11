var adiciona = document.querySelector('.add') /* Seleciona elemento por classe */

adiciona.addEventListener('click',function(e){ /* Adiciona evento de click ao elemento */
    conteudo = document.querySelector('input'); /* Seleciona elemento por tag */
    lista = document.querySelector('ul'); /* Seleciona elemento por tag */
    
    item = document.createElement('li'); /* Cria elemento */
    item.classList.add('item'); /* Adiciona classe ao elemento */
    item.setAttribute('id',new Date().getMilliseconds()) /* Adiciona atributo ao elemento */
    item.textContent = conteudo.value; /* Adiciona texto ao elemento */
    
    item.addEventListener("click",function(e){  /* Adiciona evento de click ao elemento */
        e.target.remove();
    })
    
    lista.appendChild(item); /* Adiciona elemento ao elemento pai */
    
    conteudo.value='';
});

