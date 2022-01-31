import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'port.token': token } = parseCookies()
export const api = axios.create({
	baseURL: process.env.REACT_APP_URL_API
})

if (token) {
	axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
}
