
function contar(){

        // pegando valores do html e atribuindo para as variaveis

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

                // verificando se ha valores nos campos
   
            if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
                window.alert('[ERRO] Faltam dados!')
                res.innerHTML = 'impossivel contar !'
            } else{

                    // convertendo valores em numeros para atribuir em cada variavel

                res.innerHTML = 'contando: '

                let i = Number(ini.value)
                let f = Number(fim.value)
                let p = Number(passo.value)

                    // garantindo que a passada da contagem seja no minimo 1

                if (p <= 0) {
                    window.alert('Contagem do passo tem que ser maior que 0')
                    p = 1
                }else{
            
                    // contagem crescente

                if(i<f){
                    for (let c = i ; c <= f; c += p ){
                        res.innerHTML += c + '☞'
                    }

                    // contagem decrecente

                }else{
                    for (let c = i; c > f; c -= p) {
                    res.innerHTML += c + '☞'  
                    }
                }

                }    
                    res.innerHTML += '⚑'
                
            }
}