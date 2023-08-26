import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'
import { Aside } from './aside/Aside'
import styles from './Layout.module.scss'

const Layout: React.FC = () => {
	const mode = localStorage.getItem('mode')

	return (
		<div className={mode === 'dark' ? styles.dark : styles.light}>
			<Header />
			<div className={styles.main}>
				<Aside />
				<Outlet />
			</div>
		</div>
	)
}
export { Layout }
