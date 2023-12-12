//@ts-ignore
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { Provider } from './context/Theme'
import { BrowserRouter } from 'react-router-dom'
import './i18n/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>
)
