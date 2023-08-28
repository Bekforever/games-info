import { Layout } from './components/layouts/Layout'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/screens/home/Home'
import { useSelectors } from './hooks/useSelectors'
// import { Game } from './components/screens/game/Game'
import { Suspense, lazy } from 'react'

const App: React.FC = () => {
	const Game = lazy(() =>
		import('./components/screens/game/Game').then(module => ({
			default: module.Game,
		}))
	)
	const mode = useSelectors()

	return (
		<div className={`app ${mode}`}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route
						path='/game/:slug'
						element={
							<Suspense fallback={<p>Loading...</p>}>
								<Game />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</div>
	)
}

export { App }
