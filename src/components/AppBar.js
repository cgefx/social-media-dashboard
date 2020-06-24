import React from 'react';
import styled from 'styled-components';
import { ThemeToggler } from '../components';
import { Paragraph, Heading, StyledLine } from './style';

const Background = styled.div`
	background: ${({ theme }) => theme.backgroundTop};
	width: 100%;
	border-bottom-left-radius: 2.5rem;
	border-bottom-right-radius: 2.5rem;
	height: 26rem;
	margin-bottom: -10rem;

	@media (min-width: 900px) {
		margin-bottom: -15rem;
	}
`;

const StyledContainer = styled.div`
	background: ${({ theme }) => theme.backgroundTop};
	padding: 4rem 2.4rem 0 2.4rem;
	margin: 0 auto;
	max-width: 120rem;
	display: flex;
	flex-direction: column;
	border-bottom-left-radius: 2.5rem;
	border-bottom-right-radius: 2.5rem;

	@media (min-width: 900px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const AppBar = ({ theme, toggleTheme, total }) => {
	return (
		<Background>
			<StyledContainer>
				<div>
					<Heading>Social Media Dashboard</Heading>
					<Paragraph>Total Followers: {total}</Paragraph>
					<StyledLine />
				</div>
				<div>
					<ThemeToggler theme={theme} toggleTheme={toggleTheme} />
				</div>
			</StyledContainer>
		</Background>
	);
};

export default AppBar;
