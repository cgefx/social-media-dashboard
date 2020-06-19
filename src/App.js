import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Overview from './components/Overview/Overview';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import FollowGrid from './components/FollowGrid/FollowGrid';

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<>
				<GlobalStyles />
				<Dashboard>
					<Header />
					<FollowGrid />
					<Overview />
				</Dashboard>
			</>
		</ThemeProvider>
	);
}

export default App;
