import logo from 'src/assets/img/logo.jpg'
import styles from './Header.module.scss'
import { Search } from 'src/components/layouts/header/search/Search'
import { Mode } from './mode/Mode'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/', { replace: true })
	}
	
	return (
		<div className={styles.layout}>
			<img onClick={handleClick} src={logo} />
			<Search />
			<Mode />
		</div>
	)
}
export { Header }
