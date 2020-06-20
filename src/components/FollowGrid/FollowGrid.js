import React from 'react';
import FollowCard from '../FollowCard/FollowCard';
import styled from 'styled-components';
import followData from '../../api/followData';

const StyledContainer = styled.section`
	margin: 0 auto;
	padding: 4.8rem 2.4rem;
`;

const StyledGrid = styled.ul`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
	grid-gap: 2.4rem;
`;

const followList = followData.map((item) => (
	<li key={item.id}>
		<FollowCard
			username={item.username}
			metric={item.metric}
			platform={item.platform}
			count={item.count}
			change={item.change}
			trend={item.trend}
		/>
	</li>
));

const FollowGrid = () => {
	return (
		<StyledContainer>
			<StyledGrid>{followList}</StyledGrid>
		</StyledContainer>
	);
};

export default FollowGrid;
