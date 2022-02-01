import type { NextPage } from 'next'
import Images from '../frontEnd/components/Imagens/Images'
import { Container } from '../frontEnd/styles/index'

const Home: NextPage = (props) => {
	return (
		<Container className="flex">
			<div className="flex-auto">
				<Images />
			</div>
			<div className="flex-none ">
				<h1 className="text-3xl ">Iago Lima Pinto</h1>
				<h1>About</h1>
				<h1>Contact me</h1>
			</div>
		</Container>
	)
}

export default Home
