import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = () => (
	<ContentLoader
		speed={1}
		width={300}
		height={350}
		viewBox='0 0 300 460'
		backgroundColor='#f2eded'
		foregroundColor='#dedede'
	>
		<circle cx='20' cy='410' r='20' />
		<rect x='0' y='265' rx='5' ry='5' width='140' height='25' />
		<rect x='0' y='0' rx='10' ry='10' width='300' height='250' />
		<rect x='260' y='265' rx='10' ry='10' width='30' height='25' />
		<rect x='0' y='320' rx='10' ry='10' width='300' height='35' />
	</ContentLoader>
)

export { Skeleton }
