import axios from "axios";

const token = "";
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: 'ff20a44d2c5e67d8412900a03595b048',
    
  },
  headers: {
    Authorization: "Bearer " + token
  }
});