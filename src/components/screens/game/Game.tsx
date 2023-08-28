import { useParams } from 'react-router-dom'
import {
	useGetGameInfoQuery,
	useGetGameMoviesQuery,
	useGetGameScreenshotsQuery,
} from 'src/redux/index.endpoints'
import styles from './Game.module.scss'

type TParams = {
	slug: string
}

const Game: React.FC = () => {
	const mode = localStorage.getItem('mode')
	const { slug } = useParams<TParams>()
	const { data } = useGetGameInfoQuery(String(slug))
	const { data: screenshots } = useGetGameScreenshotsQuery(String(data?.id))
	const { data: movies } = useGetGameMoviesQuery(String(data?.id))

	return (
		<div className={styles.root}>
			<div className={styles.left}>
				<div className={styles.head}>
					<h1>{data?.name}</h1>
					<p>{data?.description_raw}</p>
				</div>
				<div className={styles.stats}>
					<div className={styles.platforms}>
						<h3>Platforms</h3>
						{data?.parent_platforms?.map(item => {
							return <span key={item.platform.id}>{item.platform.name}</span>
						})}
					</div>
					<div className={styles.metacritic}>
						<h3>Metascore</h3>
						<span className={mode === 'dark' ? styles.dark : styles.light}>
							{data?.metacritic}
						</span>
					</div>
					<div className={styles.genres}>
						<h3>Genres</h3>
						{data?.genres?.map(item => {
							return <span key={item.id}>{item.name}</span>
						})}
					</div>
					<div className={styles.publishers}>
						<h3>Publishers</h3>
						{data?.publishers?.map(item => {
							return <span>{item.name}</span>
						})}
					</div>
				</div>
			</div>
			<div className={styles.right}>
				{movies && movies.count > 0 && (
					<video src={movies.results[0].data[480]} controls />
				)}
				<div className={styles.screenshots}>
					{screenshots?.results?.map(item => {
						return <img key={item.id} src={item.image} />
					})}
				</div>
			</div>
		</div>
	)
}
export { Game }
