import React from 'react';
import styled from 'styled-components';

const StyledDashboard = styled.main`
	margin: 0 auto;
	max-width: 120rem;
`;

function Dashboard({ children }) {
	return <StyledDashboard>{children}</StyledDashboard>;
}

export default Dashboard;
