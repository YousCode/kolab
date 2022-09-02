import axios from "axios";

export const Movies = type => {
  let movieAPI = ''
  return axios.create({
    baseURL: `http://www.omdbapi.com/?i=tt3896198&apikey=cac54473${movieAPI}&${type}`
  });
};