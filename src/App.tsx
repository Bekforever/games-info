import { Layout } from './components/layouts/Layout'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/screens/home/Home'
import { useSelectors } from './hooks/useSelectors'
import { Game } from './components/screens/game/Game'
const App: React.FC = () => {
	const mode = useSelectors()

	return (
		<div className={`app ${mode}`}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/game/:slug' element={<Game />} />
				</Route>
			</Routes>
		</div>
	)
}

export { App }
