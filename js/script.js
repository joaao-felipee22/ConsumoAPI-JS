const API_KEY = "cf3cbdda0edd46e5b29b328f1a6d48f6";
let cardId = document.querySelector('#cardId')
let btnCarregar = document.querySelector('#loadNoticia')



function chutaPraTelaCarai(listaNoticia){
    listaNoticia.forEach((noticia) =>{
        let novaNoticia = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${noticia.urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 id="titleId" class="card-title">${noticia.title}</h5>
          <p class="card-text">${noticia.description}</p>
          <a href="#" class="btn btn-primary">Veja a noticia</a>
        </div>
     </div>`


     
    cardId.insertAdjacentHTML('beforeend', novaNoticia)

        console.log(novaNoticia)
    });

}

btnCarregar.onclick = () => {

    let config = {
        method: "GET"
    }
    
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config).then((resposta)=> {
        return resposta.json()
    })
    .then((json)=> {
        chutaPraTelaCarai(json.articles)
    })
}
