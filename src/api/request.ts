import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import NProgress from '../plugin/nprogress'
import { message } from 'ant-design-vue'

const logger = (info: string | any): void => {
  console.info('axios info :', info)
}

const _axiosInstance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {}
})

_axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    NProgress.start()
    return config
  },
  (error) => {
    logger(error)
  }
)

_axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    NProgress.done()
    return response
  },
  (error) => {
    NProgress.done()
    logger(error)
  }
)

function apiAxios<T>(method: ApiMethod, url: string, params: any) {
  return new Promise<T>((resolve, reject) => {
    _axiosInstance.defaults.headers.common.Authorization = ''
    _axiosInstance({
      method,
      url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params:
        method === 'GET' || method === 'DELETE' || method === 'PATCH'
          ? params
          : null,
      withCredentials: true
    })
      .then(
        (res: AxiosResponse<T>) => {
          resolve(res.data)
        },
        (err) => {
          reject(err)
          const errCode = err.response.status
          switch (errCode) {
            case 400:
              message.error('错误请求')
              break
            case 401:
              message.error('请检查用户名和密码')
              break
            case 403:
              message.error('身份过期请重新登录')
              break
            case 404:
              message.error('请求错误,未找到该资源')
              break
            case 405:
              message.error('请求方法未允许')
              break
            case 408:
              message.error('请求超时')
              break
            case 500:
              message.error('服务器端出错')
              break
            case 501:
              message.error('网络未实现')
              break
            case 502:
              message.error('网络错误')
              break
            case 503:
              message.error('服务不可用')
              break
            case 504:
              message.error('网络超时')
              break
            default:
              message.error('未知错误')
          }
        }
      )
      .catch((err) => {
        const errInfo = { err: err.response }
        reject(errInfo)
      })
  })
}

export default {
  get<T>(url: string, params: any) {
    return apiAxios<T>('GET', url, params)
  },
  post<T>(url: string, params: any) {
    return apiAxios<T>('POST', url, params)
  },
  put<T>(url: string, params: any) {
    return apiAxios<T>('PUT', url, params)
  },
  delete: (url: string, params: any) => {
    return apiAxios('DELETE', url, params)
  },
  patch: (url: string, params: any) => {
    return apiAxios('PATCH', url, params)
  }
}
