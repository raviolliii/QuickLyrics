# QuickLyrics
Node.js API get song lyrics from Genius

### Install
`npm install quicklyrics`

### Usage
QuickLyrics has one function: `quickLyrics(artist_name, song_name, callback)`, and passes the lyrics as an **array** to the callback function (each line of the song is an element in the array).
Example:
```javascript
var quicklyrics = require("quicklyrics");
quicklyrics("j cole", "no role modelz", function(lyrics) {
    //lyrics in an array
    console.log(lyrics[0]);
});
```

