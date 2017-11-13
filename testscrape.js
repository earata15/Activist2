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


url = "https://www.gofundme.com";

	//the structure of our request call
	// the first parameter is our URL
	// the callback function takes 3 parameters

var options = {
  headers: {'user-agent': 'node.js'}
}

request(url, options, function(error, response, html){
	
	if(!error){
		// Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
		var $ = cheerio.load(html);
		console.log(html);
		console.log("logged html");

		// this would be the beginnings of an attempt to isolate some links w/ titles
		// didn't get to test because of 403 error from GoFundMe
		$('div.tile-title').each(function(i, element){
	        var a = $(this).prev();
     			console.log(a.text());
     			console.log("logged");
	    });
	}
});
