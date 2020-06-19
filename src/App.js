import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Overview from './components/Overview/Overview';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<>
				<GlobalStyles />
				<Dashboard>
					<Overview />
				</Dashboard>
			</>
		</ThemeProvider>
	);
}

export default App;
