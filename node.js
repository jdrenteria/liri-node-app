var request = require("request");
var moment = require("moment");
var spotify = require("node-spotify-api");
var fs = require("fs");

var keys = require(".//keys");
let liriInput = process.argv[2];
let input = process.argv.slice(3).join(" ");

switch (liriInput){
    case "concert-this":
        concertThis(input);
        break;
    case "spotify-this-song":
        spotifyThisSong(input);
        break;
    case "movie-this":
        if(input == null){
            movieThis("The Terminator");
        }else{
            movieThis(input);
        }
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
        default:
        console.log('--------------Please use one of the folloring four Liri functions:1.concert-this 2.spotify-this-song 3.movie-this 4. do-what-it-says-------------');
}

//concert this
