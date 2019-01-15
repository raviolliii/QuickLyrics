//=======================================
// quicklyrics.js
//=======================================

//general variables
var request = require("request");
var cheerio = require("cheerio");

const baseUrl = "https://www.genius.com";

//converts phrase to Genius link friendly version
//note: using .split().join() because apparently it's
//faster than regex (also easier to read)
function parsePhrase(phrase) {
    let parsed = phrase.toLowerCase().trim()
        .split(".").join("")
        .split("$").join("s")
        .split("(").join("")
        .split(")").join("")
        .split("[").join("")
        .split("]").join("")
        .split("\'").join("")
        .split(" ").join("-");
    return parsed;
}

//gets lyrics from Genius based on artist/song
function getLyrics(artist, song, callback) {
    if (!artist || !song) {
        return;
    }

    let ext = parsePhrase(artist) + "-" + parsePhrase(song);
    let url = `${baseUrl}/${ext}-lyrics`;

    request(url, function(err, res, html) {
        if (err) {
            callback(err);
        }

        let $ = cheerio.load(html);
        //map to array and filter nextline characters
        let lyrics = $("div.lyrics").text()
            .split("\n")
            .map(e => e.trim())
            .filter(e => e);

        if (callback) {
            callback(lyrics);
        }
    });
}

module.exports = getLyrics;

