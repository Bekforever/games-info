import { Layout } from './components/layouts/Layout'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/screens/home/Home'
import { useSelectors } from './hooks/useSelectors'
const App: React.FC = () => {
	const mode = useSelectors()
	return (
		<div className={`app ${mode}`}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
				</Route>
			</Routes>
		</div>
	)
}

export { App }
