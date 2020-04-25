## node-lyrics
Grab lyrics for any song.

Simply a wrapper around [this api](http://api.canarado.xyz), so visit there for more information on the API itself.

This is a simple API to work with.
```js
const lyrics = require('node-lyrics');

let ourSong = await lyrics('our song');

if(ourSong.status.failed) return console.log('Bad Response');

// show our data

console.log(ourSong.content[0].lyrics);

// or

lyrics('our song').then(l => console.log(l.content[0].lyrics));
```