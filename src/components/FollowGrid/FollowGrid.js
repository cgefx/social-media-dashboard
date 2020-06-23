import React from 'react';
import FollowCard from '../FollowCard/FollowCard';
import styled from 'styled-components';
import { Grid } from '../style';

const StyledContainer = styled.section`
	margin: 0 auto;
	padding: 4.8rem 2.4rem;
`;

const FollowGrid = ({ data }) => {
	return (
		<StyledContainer>
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
		</StyledContainer>
	);
};

export default FollowGrid;
