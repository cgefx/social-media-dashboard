import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import { GlobalStyles } from './style/global';
import { Dashboard, AppBar } from './components';
import useData from './hooks/useData';

function App() {
	const [theme, setTheme] = useState('dark');
	const { overviewData, followerData, totalFollowers } = useData();

	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />
				<AppBar
					theme={theme}
					toggleTheme={toggleTheme}
					total={totalFollowers}
				/>
				<Dashboard followers={followerData} overview={overviewData} />
			</>
		</ThemeProvider>
	);
}

export default App;
