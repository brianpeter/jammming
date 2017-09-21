const clientId = '3cd1addb01064333b79e17394a661cf4';
const redirectUri = 'http://localhost:3000/';


let accessToken = '';

const Spotify = {

  //not certain vv
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      //check  vv
     let accessTokenValue = accessTokenMatch[1];
     const expiresInValue = Number(expiresInMatch[1]);
     window.setTimeout(() => accessTokenValue = '', expiresInValue * 1000);
     window.history.pushState('Access Token', null, '/');
     return accessTokenValue;
   } else {
     const redirectUser = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
     window.location = redirectUser;
   }
 },

   search(searchTerm) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

  savePlaylist (saveplaylistName, trackURIArrary) {
    //? vv
    if (!saveplaylistName || !trackURIArrary.length) {
      return '';
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userID = '';

    return fetch('https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userID = jsonResponse.id;
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userID}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({saveplaylistName: saveplaylistName})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistID = jsonResponse.id;
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify(trackURIArrary: trackURIArrary)
        });
      });
    });


  }




}

export default Spotify;
