import React from 'react';
import styled from 'styled-components';

const StyledDashboard = styled.main`
	margin: 2.4rem auto;
	max-width: 120rem;
	padding: 2.4rem;
`;

function Dashboard({ children }) {
	return <StyledDashboard>{children}</StyledDashboard>;
}

export default Dashboard;
