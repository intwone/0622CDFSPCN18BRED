console.log("Start JS");

const lista = document.querySelector(".row");

const API_KEY = '753b07413442493f9d224a8cdcc6c29c';
const NEWS_API_BASE_URL = "https://newsapi.org/v2";
const GET_FETCH_CONFIG = {
    method: "GET",
    headers: {
        'X-Api-Key': API_KEY
    }
}

/* fetch("https://newsapi.org/v2/top-headlines?country=br", {
    method: "GET",
    headers: {
        'X-Api-Key': '753b07413442493f9d224a8cdcc6c29c'
    }
}).then(response => response.json())
    .then(data => console.log(data))
        .catch(e => console.log(e)) */

async function getNewsTopHeadline() {
    const response = await fetch(`${NEWS_API_BASE_URL}/top-headlines?country=br`, GET_FETCH_CONFIG); 

    const data = await response.json();
    console.log(data);

    data.articles.forEach(article => {
        const card = `<div class="col-3">
            <div class="card">
            <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}" />
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">
                    ${article.description}
                </p>
                <a href="${article.url}" target="_blank" class="btn btn-primary">Go to ${article.source.name}</a>
            </div>
            </div>
        </div>`

        lista.insertAdjacentHTML('beforeend', card);
    })
    
    

}

getNewsTopHeadline();

//top-headlines?country=br