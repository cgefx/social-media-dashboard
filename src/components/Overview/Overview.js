import React from 'react';
import styled from 'styled-components';
import OverviewCard from '../OverviewCard/OverviewCard';
import overviewData from '../../api/overviewData';

const StyledContainer = styled.section`
	/* padding: 0 2.4rem; */
	margin: 0 2.4rem;
`;

const StyledGrid = styled.ul`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
	grid-gap: 1.6rem;
`;

const Heading = styled.h2`
	font-size: 2.2rem;
	font-weight: 700;
	margin-bottom: 2.8rem;
`;

const overviewList = overviewData.map((item) => (
	<li key={item.id}>
		<OverviewCard
			metric={item.metric}
			platform={item.platform}
			count={item.count}
			change={item.change}
			trend={item.trend}
		/>
	</li>
));

function Overview() {
	return (
		<StyledContainer>
			<Heading>Overview - Today</Heading>
			<StyledGrid>{overviewList}</StyledGrid>
		</StyledContainer>
	);
}

export default Overview;
