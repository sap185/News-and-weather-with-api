
// let url = "https://newsapi.org/v2/everything?q=keyword&apiKey=52c93170940b4826bf7def9caa8d8edf";
// const url="https://newsapi.org/v2/everything?q=Apple&from=2023-08-18&sortBy=popularity&apiKey=52c93170940b4826bf7def9caa8d8edf"
// const q=document.getElementById("search-input")
// const searchButton=document.getElementById("submit")
// const tNews=document.getElementById("tNews")

// const apiKey="52c93170940b4826bf7def9caa8d8edf"

const gNews = document.getElementById("gNews")
const inNews = document.getElementById("inNews")
const apNews = document.getElementById("apNews")
const bitnews = document.getElementById("bitnews")
const tech = document.getElementById("tech")

const apiKey='52c93170940b4826bf7def9caa8d8edf'




 /*innews*/    const url1 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
 /* gnews*/    const url2 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
 /*apnews*/    const url3 = `https://newsapi.org/v2/everything?q=apple&from=2023-08-17&to=2023-08-17&sortBy=popularity&apiKey=${apiKey}`;
 /*bitnews*/    const url4 = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
 /*tech*/    const url5 = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${apiKey}`;


const News = (url) => {

	let response = fetch(url)
	response.then((value) => {
		return value.json()
	}).then((news) => {
		let articles = news.articles
		console.log(articles)
		ihtml = ""
		for (item in articles) {
			console.log(articles[item])
			ihtml += `
					<div class="card mx-4 my-4" style="width: 20rem;">
						<img src="${articles[item].urlToImage}" class="card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title">${articles[item].title}</h5>
							<h6> ~ ${articles[item].author}</h6>
							<p> - ${articles[item].publishedAt}</p>
							<p>${articles[item].description}</p>
						<hr class="my-4">
							<p class="card-text">${articles[item].content}</p>
							<a href="${articles[item].url}" class="btn btn-primary">Go</a>
						</div>
					</div>
					`
		}
		cardContainer.innerHTML = ihtml
	})
}

window.addEventListener('load', (e) => {
	e.preventDefault()
	newsType.innerHTML = "India"
	News(url1)
})

inNews.addEventListener('click', (e) => {
	e.preventDefault()
	newsType.innerHTML = "India"
	News(url1)
})


gNews.addEventListener('click', (e) => {
	e.preventDefault()
	newsType.innerHTML = "Globe"
	News(url2)
})


apNews.addEventListener('click', (e) => {
	e.preventDefault()
	newsType.innerHTML = "Apple"
	News(url3)
})


bitnews.addEventListener('click', (e) => {
	e.preventDefault()
	newsType.innerHTML = "BitCoin"
	News(url4)
})


tech.addEventListener('click', (e) => {
	e.preventDefault()
	newsType.innerHTML = "Technology"
	News(url5)
})


