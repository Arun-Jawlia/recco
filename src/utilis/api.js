import axios from "axios";

export const BASE_URL = "https://recco-json-server.onrender.com";
// export const BASE_URL = "http://localhost:8080";

// export const fetchDataFromApi = async (url, params) => {
//   try {
//     const data = await axios.get(BASE_URL + url, {
//       params,
//     });

//     return data;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

export const getData = async () => {
  try {
    const data = await axios.get(`${BASE_URL}/products`)
    return data
  } catch (err) {
    console.log(err);
  }
};
