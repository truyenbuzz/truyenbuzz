import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
class Main extends React.Component {
	render() {
		return (
			<div>
				<App />
			</div>
		)
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
