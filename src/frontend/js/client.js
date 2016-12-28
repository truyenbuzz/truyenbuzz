import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import store , {history} from './store/store';
import {Provider} from 'react-redux';

import App from './app/App';
import Single from './stories/Single';
import AppContainer from './app/AppContainer';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={AppContainer}>
				<IndexRoute component={App}></IndexRoute>
				<Route path="/:coverID" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

const app = document.getElementById('app');
ReactDOM.render(router, app);
