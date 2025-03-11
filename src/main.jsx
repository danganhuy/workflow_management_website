
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

)
