import React from 'react';
import styled from 'styled-components';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

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
	}
`;

const Column = styled.div``;
const Heading = styled.h1`
	font-size: 2.2rem;
	margin-bottom: 1rem;

	@media (min-width: 900px) {
		font-size: 3.2rem;
	}
`;

const Subheading = styled.p`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.textSecondary};
	font-weight: 700;
	margin-bottom: 2.4rem;
`;

const StyledLine = styled.hr`
	border: 0;
	border-top: 1px solid ${({ theme }) => theme.textSecondary};
	@media (min-width: 900px) {
		display: none;
		opacity: 0;
	}
`;

const AppBar = ({ theme, toggleTheme }) => {
	return (
		<Background>
			<StyledContainer>
				<Column>
					<Heading>Social Media Dashboard</Heading>
					<Subheading>Total Followers: 23,004</Subheading>
					<StyledLine />
				</Column>
				<Column>
					<ThemeToggler theme={theme} toggleTheme={toggleTheme} />
				</Column>
			</StyledContainer>
		</Background>
	);
};

export default AppBar;
