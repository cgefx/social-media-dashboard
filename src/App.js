import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import { GlobalStyles } from './style/global';
import Overview from './components/Overview/Overview';
import Dashboard from './components/Dashboard/Dashboard';
import AppBar from './components/AppBar/AppBar';
import FollowGrid from './components/FollowGrid/FollowGrid';
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
				<Dashboard>
					<FollowGrid data={followerData} />
					<Overview data={overviewData} />
				</Dashboard>
			</>
		</ThemeProvider>
	);
}

export default App;
