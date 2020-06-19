import React from 'react';
import styled from 'styled-components';

const StyledDashboard = styled.main`
	/* border: 1px solid red; */
	margin: 2.4rem;
`;

export default function Dashboard({ children }) {
	return <StyledDashboard>{children}</StyledDashboard>;
}
