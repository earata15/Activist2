// problems: check console for output
//html is giving us a 403 error, GoFundMe not allowing us to scrape


var express = require("express");
var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");
var app = express();


url = "https://www.gofundme.com";

	//the structure of our request call
	// the first parameter is our URL
	// the callback function takes 3 parameters
request(url, function(error, response, html){

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
	    });
	}
});
