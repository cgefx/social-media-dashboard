import React from 'react';
import styled from 'styled-components';
import { FollowersCard, OverviewCard } from '../components';
import { Grid, Section, HeadingSecondary } from './style';

const StyledDashboard = styled.main`
	margin: 0 auto;
	max-width: 120rem;
`;

function Dashboard({ followers, overview }) {
	return (
		<StyledDashboard>
			<Section>
				<Grid large>
					{followers.map((item) => (
						<li key={item.id}>
							<FollowersCard
								username={item.username}
								metric={item.metric}
								platform={item.platform}
								count={item.count}
								change={item.change}
								trend={item.trend}
							/>
						</li>
					))}
				</Grid>
			</Section>

			<Section>
				<HeadingSecondary>Overview - Today</HeadingSecondary>
				<Grid>
					{overview.map((item) => (
						<li key={item.id}>
							<OverviewCard
								metric={item.metric}
								platform={item.platform}
								count={item.count}
								change={item.change}
								trend={item.trend}
							/>
						</li>
					))}
				</Grid>
			</Section>
		</StyledDashboard>
	);
}

export default Dashboard;
