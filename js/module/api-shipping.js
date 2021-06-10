export default function initApiShipping(){
    const inputShipping = document.querySelector('[data-shipping="input"]')
    const buttonShipping = document.querySelector('[data-shipping="button"]')
    const precoShipping = document.querySelector('[data-shipping="preco"]')
    const localidadeShipping = document.querySelector('[data-shipping="localidade"]')
    buttonShipping.addEventListener('click' , hendalShipping)
    function hendalShipping(event){
        event.preventDefault()
        const regexp = /\D/g
        const valueInput = inputShipping.value.replace(regexp , '')
        const reqshipping = fetch(`https://viacep.com.br/ws/${valueInput}/json/`)
        reqshipping.then( response => response.json())
        .then(json => {
            creatEndereco(json)
        })
        .catch(erro => {
            console.log(Error(erro))
            precoShipping.style.display = 'none'
            localidadeShipping.style.display = 'block'
            localidadeShipping.innerText = 'Verifique o cep e tente novamente'
        })
    }
    function creatEndereco(endereco){
        if(endereco.localidade){ 
        precoShipping.style.display = 'block'
        precoShipping.innerText = `$${Math.floor(Math.random() * (80 - 30 + 1) + 30)}`
        localidadeShipping.style.display = 'block'
        localidadeShipping.innerText = `Cidade: ${endereco.localidade}, ${endereco.uf}
        Bairro: ${endereco.bairro}
        ${endereco.logradouro}`
        }else{
            precoShipping.style.display = 'none'
            localidadeShipping.style.display = 'block'
            localidadeShipping.innerText = 'Verifique o cep e tente novamente'
        }
    }
}