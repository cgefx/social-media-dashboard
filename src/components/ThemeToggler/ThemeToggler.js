import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.6rem;
`;

const Text = styled.p`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.textSecondary};
	font-weight: 700;
	text-transform: capitalize;
	margin-right: 1rem;

	:hover {
		color: ${({ theme }) => theme.textPrimary};
	}
`;

const ToggleContainer = styled.button`
	background: ${({ theme }) => theme.toggle};
	border: none;
	outline: 0;
	border-radius: 30px;
	cursor: pointer;
	display: flex;
	align-items: center;
	padding-left: 0.2rem;
	width: 4.8rem;
	height: 2.4rem;
`;

const ToggleSwitch = styled.div`
	border-radius: 50%;
	background: ${({ theme }) => theme.backgroundTop};
	height: 2rem;
	width: 2rem;
	margin: 0;
	padding: 0;
	transition: all 0.15s linear;
	transform: ${({ lightTheme }) =>
		lightTheme ? `translateX(2.2rem)` : `translateX(0)`};
`;

const ThemeToggler = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light';

	return (
		<Row>
			<Text>{theme} Mode</Text>
			<ToggleContainer onClick={toggleTheme}>
				<ToggleSwitch lightTheme={isLight} />
			</ToggleContainer>
		</Row>
	);
};

export default ThemeToggler;
