import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState
} from 'react'
import { setCookie, parseCookies } from 'nookies'

import { api } from '../server/api'
import Router from 'next/router'
import { getCookieParser } from 'next/dist/server/api-utils'

interface SignInCreddentials {
	email: string
	password: string
}

interface AuthContextData {
	isAuthenticated: boolean
	signIn(credencials: SignInCreddentials): Promise<void>
}

interface AuthState {
	token: string
	email: object
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>(() => {
		return {} as AuthState
	})
	const isAuthenticated = !!data

	useEffect(() => {
		const { 'port.token': token } = parseCookies()

		if (token) {
			// const res = await api.get('/sessions')
			// setData(res.data)
		}
	}, [])

	const signIn = useCallback(async ({ email, password }) => {
		const response = await api.post('/sessions', {
			email,
			password
		})
		const { token } = response.data
		setCookie(undefined, 'port.token', token, {
			maxAge: 60 * 60 * 4 // 4hr
		})
		api.defaults.headers.common = { Authorization: `Bearer ${token}` }
		setData(response.data)
		Router.push('/admin/dashboard')
	}, [])

	return (
		<AuthContext.Provider value={{ isAuthenticated, signIn }}>
			{children}
		</AuthContext.Provider>
	)
}

function useAuth(): AuthContextData {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}

export { AuthProvider, useAuth }
