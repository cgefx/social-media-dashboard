import React from 'react';
import styled from 'styled-components';
import { Row, Paragraph } from './style';

const ToggleContainer = styled.button`
	background: ${({ theme }) => theme.gradient};
	border: none;
	outline: 0;
	border-radius: 30px;
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 0 0.3rem;
	margin-left: 1rem;
	width: 4.8rem;
	height: 2.4rem;
`;

const ToggleSwitch = styled.div`
	background: ${({ theme }) => theme.backgroundTop};
	height: 2rem;
	width: 2rem;
	border-radius: 50%;
	transition: all 0.15s linear;
	transform: ${({ lightTheme }) =>
		lightTheme ? `translateX(2rem)` : `translateX(0)`};
`;

function ThemeToggler({ theme, toggleTheme }) {
	const isLight = theme === 'light';

	return (
		<Row>
			<Paragraph>{theme} Mode</Paragraph>
			<ToggleContainer onClick={toggleTheme}>
				<ToggleSwitch lightTheme={isLight} />
			</ToggleContainer>
		</Row>
	);
}

export default ThemeToggler;
