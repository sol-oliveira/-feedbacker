import axios from 'axios'
import AuthService from './auth'
import UsersService from './users'
import router from '../router'
import useStore from '@/hooks/useStore'

const store = useStore('Global')

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local,
  headers: {
    "Content-Type": "application/json",
    "Acess-Control-Allow-Origin": "*",
    Authorization: ``,
    Accept: "application/json",
  },
});


httpClient.interceptors.request.use(async config => {

  store.setGlobalLoading(true)
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

httpClient.interceptors.response.use(async (response) => {
  store.setGlobalLoading(false)
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 ||
    error.request.status === 500

  if (canThrowAnError) {
    store.setGlobalLoading(false)
    throw new Error(error.message)
  }


  if (error.response.status === 401) {
    router.push({ name: 'Home' })
  }

  store.setGlobalLoading(false)
  return error
})

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient),
}
