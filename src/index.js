import React from 'react';
import ReactDOM from 'react-dom';
import SocketIO from 'socket.io-client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from './components/Home';
import RootReducer from './reducers/root';

const socket = SocketIO('http://localhost:8080');
const store = createStore(RootReducer, { socket });

ReactDOM.render(
(<Provider store={store}>
	<Router>
		<Route path="/" component={Home}/>
	</Router>
</Provider>),
document.getElementById('root'));
