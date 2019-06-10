const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => { // this is JSX. like vue, it needs a <div> wrapper to serve the markup inside
	return (
		<div>
			<h1 className="title">Hello, world!</h1>
			<p>hello, JSX!</p>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);

