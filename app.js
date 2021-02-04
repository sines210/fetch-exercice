var moviesList = document.querySelector('#movies');
var searchBar = document.querySelector('#searchInput');
var submitButton = document.querySelector('#submitButton');
var form = document.querySelector('form')


//je fetch mes data ds une fonction
var getMovie = (movieTitle) =>
{    var url = `http://www.omdbapi.com/?apikey=bd88ca49&s=${movieTitle}`;
 
        fetch(url)
.then(response=>response.json())
.then((data)=>{
if(data.Response){
    console.log(data)
    data.Search.forEach(movie => {
        moviesList.insertAdjacentHTML('beforeend', `<li>
        <img src='${movie.Poster}'/>
        ${movie.Title}
        </li>`)
    });
}
})}

//j'appel ma fonction pour avoir un contenu au chargement de la page
getMovie('batman')

//essayer d'afficher un film en random

//je fetch les data de la fonction avec le nom cherché
form.addEventListener('submit', (event) =>{
event.preventDefault();
moviesList.innerHTML='';
getMovie(searchBar.value)
})

//je réinitialise ma searchbar
searchBar.addEventListener('click', (event)=>{
    searchBar.value='';
})