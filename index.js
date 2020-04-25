const https = require('https');
/**
 * A song object
 * @typedef {Object} Song
 * @property {String} title the title of the song
 * @property {String} lyrics the lyrics of the song
 * @property {String} artist the artist(s) of the song
 */

/**
 * A response object sent by the lyrics API
 * @typedef {Object} LyricResponse
 * @property {Object} status information about the reqest reponse
 * @property {Number} status.code http code representing the request response code
 * @property {String} status.message confirmation message is successful, denial if unsuccessful
 * @property {boolean} status.failed util property to quickly check if the response found any data
 * @property {Array<Song>} content array of the song object
 */

/**
 * Grab information about any song.
 * 
 * @param {String} song the song to search lyrics for
 * @return {Promise<LyricResponse>} LyricsResponse object
 */
module.exports = function(song) {
    return new Promise((resolve, reject) => {
        song = encodeURIComponent(song);

        https.get(`https://api.canarado.xyz/lyrics/${song}`, (res) => {
            let data = '';

            res.on('data', chunk => {
                data += chunk;
            })

            res.on('end', () => {
                resolve(JSON.parse(data));
            })
        }).on('error', (e) => reject(e));
    })
}