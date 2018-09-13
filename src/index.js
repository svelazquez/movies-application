/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

const $ = require("jquery");
/**
 * require style imports
 */
const {getMovies} = require('./api.js');

$(document).ready(function(){
    console.log("hello");


getMovies()
    .then((movies) => {

  $("h1").text('Here are all the movies:');
  $(".movies").html("<table style='width:100%' class='movie-cont'>\n" +
      "<tr>\n" +
      "<th>ID</th>\n" +
      "<th>Title</th>\n" +
      "<th>Rating</th>\n" +
      "</tr>");

  movies.forEach(({title, rating, id}) => {
    $(".movie-cont").append(`<tr><td>id#${id}</td> <td>${title}</td> <td>rating: ${rating}</td></tr>`);
  });
})
    .catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

});



