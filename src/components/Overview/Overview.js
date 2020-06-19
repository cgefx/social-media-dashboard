import React from 'react';
import styled from 'styled-components';
import OverviewCard from '../OverviewCard/OverviewCard';
import overviewData from '../../api/overviewData';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center;
	justify-items: center; */
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
			<ul>{overviewList}</ul>
		</StyledContainer>
	);
}

export default Overview;
