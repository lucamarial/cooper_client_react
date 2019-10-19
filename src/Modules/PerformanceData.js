import axios from 'axios'
import { storeAuthCredentials } from './Auth'

const apiUrl = 'http://localhost:3000/api/v1';

const saveData = async (result, values) => {
  let headers = await sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };
  const path = apiUrl + '/performance_data';
  const { gender, distance, age } = values

  return new Promise((resolve, reject) => {
    axios
      .post(path, {
        performance_data: { data: { message: result,
                                    gender: gender,
                                    distance: distance,
                                    age: age }
      }
    }, {
      headers: headers
    })
    .then(response => {
      storeAuthCredentials(response);
      resolve(response.data.message);
    });
  });
};

const getData = async () => {
  let headers = await sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };
  const path = apiUrl + '/performance_data';
  return new Promise((resolve, reject) => {
    axios
      .get(path, {
        headers: headers
      })
      .then(response => {
        storeAuthCredentials(response);
        resolve(response);
      });
  });
};

export { getData, saveData }
