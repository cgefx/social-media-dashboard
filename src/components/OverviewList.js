import React from 'react';
import overviewData from '../api/overviewData'; //! don't forget me
import { OverviewCard } from '../components';
import { Grid, HeadingSecondary, Section } from './style';

function OverviewList() {
	return (
		<Section>
			<HeadingSecondary>Overview - Today</HeadingSecondary>
			<Grid>
				{overviewData.map((item) => (
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
	);
}

export default OverviewList;
