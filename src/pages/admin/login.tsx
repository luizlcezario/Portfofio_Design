import type { NextPage } from 'next'
import { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { FiLock, FiMail } from 'react-icons/fi'
import Input from '../../components/Input'
import { Container } from '../../styles/login'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../hooks/AuthContext'
import { useToast } from '../../hooks/ToastContext'
import getValidationErros from '../../utils/getValidationErrors'
interface IProps {
	email: string
	password: string
}

const Login: NextPage = () => {
	const formRef = useRef<FormHandles>(null)
	const { signIn } = useAuth()
	const { addToast } = useToast()
	const handleLogin = useCallback(
		async (data: IProps) => {
			try {
				formRef.current?.setErrors({})
				const schema = Yup.object().shape({
					email: Yup.string()
						.required('E-mail obrigatório')
						.email('Digite um e-mail válido'),
					password: Yup.string().min(6, 'No mínimo 6 digitos')
				})

				await schema.validate(data, {
					abortEarly: false
				})

				await signIn({
					email: data.email,
					password: data.password
				}).then(() =>
					addToast({
						type: 'info',
						title: 'Bem vinda Rayane !',
						description: 'Tenha um bom dia Iago Lima C==3!'
					})
				)
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErros(err)
					formRef.current?.setErrors(errors)
				} else {
					addToast({
						type: 'error',
						title: 'Erro na autenticação',
						description:
							'Ocorreu um erro ao fazer login, cheque as credencias'
					})
				}
			}
		},
		[signIn, addToast]
	)
	return (
		<Container className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
			<div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white shadow-fuchsia-900">
				<Form ref={formRef} className="m-auto" onSubmit={handleLogin}>
					<div className="flex-none w-full p-5 text-fuchsia-900 text-center text-3xl">
						<strong>Login</strong>
					</div>

					<Input icon={FiMail} name="email" placeholder="E-mail" />
					<Input
						icon={FiLock}
						name="password"
						type="password"
						placeholder="Senha"
					/>
					<button
						type="submit"
						className="bg-fuchsia-900 text-white w-32 mt-4 rounded-md p-1 transition-colors hover:bg-fuchsia-300 hover:text-black hover:shadow-md"
					>
						Entrar
					</button>
				</Form>
			</div>
		</Container>
	)
}

export default Login
