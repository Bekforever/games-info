import styles from './Aside.module.scss'
import { useLocation } from 'react-router-dom'
import genres from './Genres'
import { useActions } from 'src/hooks/useActions'

const Aside: React.FC = () => {
	const { pathname } = useLocation()
	const { setGenre } = useActions()

	return (
		<div className={pathname.includes('/game/') ? styles.hide : styles.aside}>
			<h2>Genres</h2>
			<div className={styles.results}>
				{genres?.results.map(item => {
					return (
						<div
							onClick={() => setGenre(item.id)}
							className={styles.genre}
							key={item.image_background}
						>
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
