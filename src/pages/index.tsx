import type { NextPage } from 'next'
import Images from '../components/Images'
import { Container } from '../styles/index'

const Home: NextPage = () => {
	return (
		<Container className="flex">
			<div className="flex-auto">
				<Images />
			</div>
			<div className="flex-none ">
				<h1 className="text-3xl ">Iago Lima Pinto</h1>
				<h1>About</h1>
				<h1>Contacts</h1>
			</div>
		</Container>
	)
}

export default Home
