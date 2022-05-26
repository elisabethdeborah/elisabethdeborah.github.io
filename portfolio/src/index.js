import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
import App from './App';
import Cv from './components/CV/Cv';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<BrowserRouter>
		<Routes>
		<Route path="/" element={<App />}>
			<Route path="/cv" element={<Cv />} />
		</Route>
		</Routes>
	</BrowserRouter>
  </React.StrictMode>
);

