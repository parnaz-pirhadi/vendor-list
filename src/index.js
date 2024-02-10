import ReactDOM from 'react-dom/client';
import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById('root'));
import App from './App';

root.render(
        <Provider store={store}>
                <Suspense fallback={<div/>}>
                    <BrowserRouter basename={"/vendor-list"}>
                        <App/>
                    </BrowserRouter>

                </Suspense>
        </Provider>
);

