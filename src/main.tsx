import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/index.ts'
import './assets/styles/base/_reset.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
