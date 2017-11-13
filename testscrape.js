// solved 403 error, currently just pulling front page of gofundme
// now comes the real grunt work:
// TODO:
// create search queries (user input or just predefined) & request HTML from search pages
// cull results & consolidate into a document (no repeats) (JSON?)
// information included in document: title, URL, location, funding goal, funds raised


var express = require("express");
var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");
var app = express();


url = "https://www.gofundme.com/mvc.php?route=category&term=activist";

	//the structure of our request call
	// the first parameter is our URL
	// the callback function takes 3 parameters

var options = {
  headers: {'user-agent': 'node.js'}
}

request(url, options, function(error, response, html){
	
	if(!error){
		// utilize the cheerio library on the returned html which will essentially give us jQuery functionality
		var $ = cheerio.load(html);

		// pull search results: titles, URLs, description
		// search results can be found under the class name js-fund-tile
		//filter by this class, find specific info from there	
		$('.js-fund-tile').each(function(i,element){
			// unsure if this syntax is ugly or not but it seems to work fine
			// I don't think I can use a different variable name besides '$'
			var $ = cheerio.load(element);

			// pull title info
			$('div .tile-title').each(function(j, elt){
				var data = $(this);
				console.log("\n\nResult " + i +":\nTitle: "+ data.text());
			});

			//pull URL for search result
			console.log("URL: " + $('a', 'div .js-tile-img-contain').attr('href'));
			
			// pull description 
			$('div .tile-footer').each(function(j, elt){
				var data = $(this);
				console.log("Description: "+data.text());
			});
		});	
/*
		$('div .tile-title').each(function(i, element){
			var data = $(this);

	        console.log(data.text());
	        console.log("logged");
	        			
	    });*/

	}
});
