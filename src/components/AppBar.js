import React from 'react';
import styled from 'styled-components';
import { ThemeToggler } from '../components';
import { Paragraph, Heading, StyledLine, Section, FlexBox } from './style';

const Background = styled.div`
	background: ${({ theme }) => theme.backgroundTop};
	width: 100%;
	height: 26rem;
	margin-bottom: -10rem;
	border-bottom-left-radius: 2.5rem;
	border-bottom-right-radius: 2.5rem;

	@media (min-width: 900px) {
		margin-bottom: -15rem;
	}
`;

function AppBar({ theme, toggleTheme, total }) {
	return (
		<Background>
			<Section>
				<FlexBox>
					<div>
						<Heading>Social Media Dashboard</Heading>
						<Paragraph>Total Followers: {total}</Paragraph>
						<StyledLine />
					</div>
					<div>
						<ThemeToggler theme={theme} toggleTheme={toggleTheme} />
					</div>
				</FlexBox>
			</Section>
		</Background>
	);
}

export default AppBar;
