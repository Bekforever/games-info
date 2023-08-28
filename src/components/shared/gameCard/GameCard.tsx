import { IGame } from 'src/redux/games/Games.types'
import styles from './GameCard.module.scss'
import { GameCardPlatform } from './GameCardPlatform'
import { useNavigate } from 'react-router-dom'

const GameCard: React.FC<IGame> = props => {
	const mode = localStorage.getItem('mode')
	const { name, ratings, background_image, parent_platforms, metacritic, slug } = props
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/game/${slug}`, { replace: true })
	}

	return (
		<div
			onClick={handleClick}
			className={
				styles.card + ' ' + (mode === 'dark' ? styles.dark : styles.light)
			}
		>
			<img alt='example' src={background_image} />
			<div className={styles.text_wrapper}>
				<div className={styles.wrapper}>
					<div className={styles.platforms}>
						<GameCardPlatform platforms={parent_platforms} />
					</div>
					<div
						className={
							styles.metacritic +
							' ' +
							(mode === 'dark' ? styles.dark : styles.light)
						}
					>
						{metacritic}
					</div>
				</div>
				<div className={styles.title_wrapper}>
					<div className={styles.title}>{name}</div>
					<div className={styles.recommend}>
						{ratings[0]?.title === 'exceptional' ? '🎯' : '👍'}
					</div>
				</div>
			</div>
		</div>
	)
}

export { GameCard }
