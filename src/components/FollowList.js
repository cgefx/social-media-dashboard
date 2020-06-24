import React from 'react';
import { FollowCard } from '../components';
import { Grid, Section } from './style';

const FollowList = ({ data }) => {
	return (
		<Section>
			<Grid large>
				{data.map((item) => (
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
				))}
			</Grid>
		</Section>
	);
};

export default FollowList;
