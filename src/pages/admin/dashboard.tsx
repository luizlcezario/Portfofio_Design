import type { NextPage } from 'next'

const Dashboard: NextPage = () => {
	return <h1>ola mundo</h1>
}

// const getServerSideProps: GetServerSideProps = async ctx => {
// 	const { 'port.token': token } = parseCookies(ctx)

// 	if (!token) {
// 		return {
// 			redirect: {
// 				destination: '/admin/login',
// 				permanent: false
// 			}
// 		}
// 	}

// 	return {
// 		props: {}
// 	}
// }

export default Dashboard
