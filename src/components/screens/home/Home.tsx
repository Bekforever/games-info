import { useEffect, useState, useMemo } from 'react'
import { Platforms } from './platforms/Platforms'
import { Sort } from './sort/Sort'
import styles from './Home.module.scss'
import { GameCard } from 'src/components/shared/gameCard/GameCard'
import { useGetAllGamesQuery } from 'src/redux/index.endpoints'
import { Skeleton } from './skeleton/Skeleton'
import { useSelectors } from 'src/hooks/useSelectors'
import genresList from 'src/components/layouts/aside/Genres'
import PlatformsList from './platforms/PlatformsList'

type TParams = {
	[key: string]: number | string
}

const Home: React.FC = () => {
	const [genresName, setGenresName] = useState('')
	const [platformName, setPlatformName] = useState('')
	const { genre, platform, ordering, search } = useSelectors()
	const [newParams, setNewParams] = useState<TParams>({})

	const params = useMemo<TParams>(() => {
		return {
			genres: genre,
			platforms: platform,
			ordering: ordering,
			search: search,
		}
	}, [genre, platform, ordering, search])

	const { data, isFetching, isLoading } = useGetAllGamesQuery(newParams)

	useEffect(() => {
		if (genre) {
			genresList.results.map(
				item => item.id === genre && setGenresName(item.name)
			)
		}
		if (platform) {
			PlatformsList.results.map(
				item => item.id === +platform && setPlatformName(item.name)
			)
		}

		let keys = Object.keys(params)
		for (let key of keys) {
			let value = params[key]

			if (value !== '' && value !== 0) {
				setNewParams(prev => ({ ...prev, [key]: value }))
			}
		}
	}, [genre, platform, search, ordering])

	return (
		<div className={styles.home}>
			<div className={styles.head}>
				<h1>
					{platformName} {genresName} Games
				</h1>
				<div className={styles.sort_wrapper}>
					<Platforms />
					<Sort />
				</div>
			</div>
			<div className={styles.results}>
				{isLoading || isFetching
					? [...Array(8)].map((_, i) => <Skeleton key={i} />)
					: data?.results.map(item => (
							<GameCard key={item.background_image} {...item} />
					  ))}
			</div>
		</div>
	)
}
export { Home }
