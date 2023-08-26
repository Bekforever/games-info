import logo from 'src/assets/img/logo.jpg'
import styles from './Header.module.scss'
import { Search } from 'src/components/shared/search/Search'
import { Mode } from './mode/Mode'

const Header: React.FC = () => {
	return (
		<div className={styles.layout}>
			<img src={logo} />
			<Search />
			<Mode />
		</div>
	)
}
export { Header }
