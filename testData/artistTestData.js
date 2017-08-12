
var express = require("express");

var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




var name = {

	artist1: {
		firstName: "Ben",
		lastName: "Franklin",
		media: "https://i.ytimg.com/vi/B14AUtWIlp4/maxresdefault.jpg",
		bio:  "always had a keen eye for detail"
	},


	artist2: {
		firstName: "John",
		lastName: "Adams",
		media: "http://www.johnnyjet.com/wp-content/uploads/2015/12/Soul-of-an-artist-Bogot%C3%A1.jpg",
		bio:  "has worked with ceramics for 10 years"
	}
}


app.get("/name.[i]", function(req, res) {

  res.render("/name.[i]", name[i]);
});