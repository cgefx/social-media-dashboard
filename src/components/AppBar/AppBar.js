import React from 'react';
import styled from 'styled-components';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const StyledContainer = styled.div`
	background: ${({ theme }) => theme.backgroundTop};
	padding: 4rem 2.4rem;
	border-bottom-left-radius: 2.5rem;
	border-bottom-right-radius: 2.5rem;
`;

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Column = styled.div``;
const Heading = styled.h1`
	font-size: 2.2rem;
	margin-bottom: 1rem;
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
`;

const AppBar = ({ theme, toggleTheme }) => {
	return (
		<StyledContainer>
			<FlexContainer>
				<Column>
					<Heading>Social Media Dashboard</Heading>
					<Subheading>Total Followers: 23,004</Subheading>
					<StyledLine />
				</Column>
				<Column>
					<ThemeToggler theme={theme} toggleTheme={toggleTheme} />
				</Column>
			</FlexContainer>
		</StyledContainer>
	);
};

export default AppBar;
