import axios from "axios";

export const Trailer = titleTrailer => {

  let apikey = 'AIzaSyA5G6-318wKoKyEisFHmC-gAZEMho8dAWE'
  let youtubeVideoId = 'C3hYjI3UnEY'
  //https://www.googleapis.com/youtube/v3/search?part=snippet&AIzaSyA5G6-318wKoKyEisFHmC-gAZEMho8dAWE=
  //let youtubeAPI = 'https://www.googleapis.com/youtube/v3/videos?id=vpHvf1wvxUY&key=${apikey}'
  return axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/videos?id=C3hYjI3UnEY&key=${apikey}`
  });
};