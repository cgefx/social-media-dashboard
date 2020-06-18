import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<>
				<GlobalStyles />
				<h1>What color themes?</h1>
			</>
		</ThemeProvider>
	);
}

export default App;
