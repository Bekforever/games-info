import { Platforms } from './platforms/Platforms'
import { Sort } from './sort/Sort'
import styles from './Home.module.scss'
import { GameCard } from 'src/components/shared/gameCard/GameCard'
import { useGetAllGamesQuery } from 'src/redux/index.endpoints'
import { Skeleton } from './skeleton/Skeleton'
import { useSelectors } from 'src/hooks/useSelectors'

const Home: React.FC = () => {
	const { genre, platform, ordering } = useSelectors()
	const { data, isFetching } = useGetAllGamesQuery({
		genres: genre,
		platforms: platform,
		ordering: ordering,
	})

	return (
		<div className={styles.home}>
			<div className={styles.head}>
				<h1>Games</h1>
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
