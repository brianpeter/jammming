let accessToken = '';

const Spotify = {

  //not certain vv
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
  }

}

export default Spotify;
