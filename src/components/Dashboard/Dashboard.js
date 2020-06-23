import React from 'react';
import styled from 'styled-components';
import FollowGrid from '../FollowGrid/FollowGrid';
import Overview from '../Overview/Overview';

const StyledDashboard = styled.main`
	margin: 0 auto;
	max-width: 120rem;
`;

function Dashboard({ followers, overview }) {
	return (
		<StyledDashboard>
			<FollowGrid data={followers} />
			<Overview data={overview} />
		</StyledDashboard>
	);
}

export default Dashboard;
