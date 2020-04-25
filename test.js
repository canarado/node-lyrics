(async function() {
    const lyrics = require('./index');

    let song = await lyrics('lil darkie black sheep');
    
    console.log(song.content[0].lyrics);
})();