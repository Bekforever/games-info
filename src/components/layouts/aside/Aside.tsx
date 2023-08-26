import { useGetGenresQuery } from 'src/redux/index.endpoints'
import styles from './Aside.module.scss'

const Aside: React.FC = () => {
	const { data } = useGetGenresQuery()

	return (
		<div className={styles.aside}>
			<h2>Genres</h2>
			<div className={styles.results}>
				{data?.results.map(item => {
					return (
						<div className={styles.genre} key={item.image_background}>
							<img src={item.image_background} />
							<span>{item.name}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export { Aside }
