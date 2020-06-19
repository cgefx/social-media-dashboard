import React from 'react';
import FollowCard from '../FollowCard/FollowCard';
import styled from 'styled-components';

const StyledContainer = styled.section`
	margin: 4.8rem 2.4rem;
`;

const FollowGrid = () => {
	return (
		<StyledContainer>
			<FollowCard />
		</StyledContainer>
	);
};

export default FollowGrid;
