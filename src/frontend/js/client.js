import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Router, Route, IndexRoute} from 'react-router';
import Header from './app/Header';
import Footer from './app/Footer';
import App from './app/App';
import Single from './stories/Single';
class Main extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		)
	}
}

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={App}></IndexRoute>
			<Route path="/1" component={Single}></Route>
		</Route>
	</Router>
)

const app = document.getElementById('app');
ReactDOM.render(router, app);
