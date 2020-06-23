import React from 'react';
import styled from 'styled-components';
import OverviewCard from '../OverviewCard/OverviewCard';
import overviewData from '../../api/overviewData';
import { Grid } from '../style';

const StyledContainer = styled.section`
	margin: 0 auto;
	padding: 0 2.4rem 4.8rem 2.4rem;
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
			<Grid>{overviewList}</Grid>
		</StyledContainer>
	);
}

export default Overview;
