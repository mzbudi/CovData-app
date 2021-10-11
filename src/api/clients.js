import axios from 'axios';

const baseApi = 'https://api.kawalcorona.com';

const instance = axios.create({
  baseURL: baseApi,
  timeout: 1000,
});

const getIndonesiaData = async () => {
  const response = await instance.get('/indonesia');
  return response;
};

export {getIndonesiaData};
