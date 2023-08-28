import { useEffect, useState } from 'react'
import { Platforms } from './platforms/Platforms'
import { Sort } from './sort/Sort'
import styles from './Home.module.scss'
import { GameCard } from 'src/components/shared/gameCard/GameCard'
import { useGetAllGamesQuery } from 'src/redux/index.endpoints'
import { Skeleton } from './skeleton/Skeleton'
import { useSelectors } from 'src/hooks/useSelectors'
import genresList from 'src/components/layouts/aside/Genres'
import PlatformsList from './platforms/PlatformsList'

const Home: React.FC = () => {
	const [genresName, setGenresName] = useState('')
	const [platformName, setPlatformName] = useState('')
	const { genre, platform, ordering, search } = useSelectors()
	const { data, isFetching } = useGetAllGamesQuery({
		genres: genre,
		platforms: platform,
		ordering: ordering,
		search: search,
	})

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
	}, [genre, platform])

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
				{isFetching
					? [...Array(8)].map((_, i) => {
						return <Skeleton key={i} />
					})
					: data?.results.map(item => {
						return <GameCard key={item.background_image} {...item} />
				})}
			</div>
		</div>
	)
}
export { Home }
