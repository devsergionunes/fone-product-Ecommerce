export default  function initSetImgs(){
    const imgTamb = document.querySelector('[data-product="imagem"]')
    const imagens = document.querySelector('[data-product="imagens"]')
    imagens.addEventListener('click', hendalImag)
    function hendalImag(event){
        event.preventDefault()
        const src = event.target.getAttribute('src')
        const alt = event.target.getAttribute('alt')
        imgTamb.querySelector('img').alt = alt
        imgTamb.querySelector('img').src = src  
    }
}

