import { IGame } from 'src/redux/games/Games.types'
import styles from './GameCard.module.scss'
import { GameCardPlatform } from './GameCardPlatform'

const GameCard: React.FC<IGame> = props => {
	const mode = localStorage.getItem('mode')
	const { name, ratings, background_image, platforms, metacritic } = props

	return (
		<div
			className={
				styles.card + ' ' + (mode === 'dark' ? styles.dark : styles.light)
			}
		>
			<img alt='example' src={background_image} />
			<div className={styles.text_wrapper}>
				<div className={styles.wrapper}>
					<div className={styles.platforms}>
						<GameCardPlatform platforms={platforms} />
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
						{ratings[0].title === 'exceptional' ? '🎯' : '👍'}
					</div>
				</div>
			</div>
		</div>
	)
}

export { GameCard }
