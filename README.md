# QuickLyrics
Node.js API get song lyrics from Genius

### Install
`npm install quicklyrics`

### Usage
Simply call the function with an author's name, song, and a callback function.
(Note: The lyrics are returned in an array)
```javascript
var quicklyrics = require("quicklyrics");
quicklyrics("j cole", "no role modelz", function(lyrics) {
    //lyrics in an array
    console.log(lyrics[0]);
});
```

