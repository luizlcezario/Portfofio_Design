import type { NextPage } from 'next'
import Masonry from 'react-masonry-css'

const Images: NextPage = () => {
	return (
		<Masonry
			breakpointCols={3}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		>
			{' '}
		</Masonry>
	)
}

export default Images
