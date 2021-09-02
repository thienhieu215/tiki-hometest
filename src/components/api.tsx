import axios, { AxiosPromise } from 'axios';

export const getBannersAPI = (): AxiosPromise<any> => {
  return axios.get('https://tiki.vn/api/v2/widgets/banners_home')
}

export const getUniqueSaleBooksAPI = (): AxiosPromise<any> => {
  return axios.get('https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=8322&page=1')
}

export const getSuperSaleBooksAPI = (): AxiosPromise<any> => {
  return axios.get('https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=8322&page=1')
}

export const getFlashSaleBooksAPI = (): AxiosPromise<any> => {
  return axios.get('https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=316&page=1')
}
