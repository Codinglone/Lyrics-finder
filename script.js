const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e3ace0ff1amsh51aad9132a4afffp1277e4jsnbe17ecb3e143',
		'X-RapidAPI-Host': 'genius.p.rapidapi.com'
	}
};

const btn = document.querySelector('button')
const demo = document.querySelector('.demo')

btn.addEventListener('click', () => {
    const song = document.querySelector('input').value
    const baseURL = `https://genius.p.rapidapi.com/search?q=${song}`

    fetch(baseURL, options)
	.then(response => response.json())
	.then(response => generateHTML(response.response))
	.catch(err => console.error(err));
})

function generateHTML(results) {
    const hits = results.hits[0]
    console.log(hits)
        const generatedHTML = `
      <img
        src="${hits.result.header_image_url}"
        alt=""
      />

      <h1 class="title">${hits.result.full_title}</h1>

      <a href="${hits.result.url}" target="_blank">Go to lyrics</a>
    `
    demo.innerHTML = generatedHTML

}
