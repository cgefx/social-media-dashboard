import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';
import CountIcon from '../CountIcon/CountIcon';

const StyledCard = styled.div`
	background: ${({ theme }) => theme.cardBackground};
	padding: 2.4rem;
	border-radius: 4px;
	max-width: 40rem;
	margin: 0 auto;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ViewCount = styled.h2`
	font-size: 3.2rem;
	font-weight: bold;
`;

const Heading = styled.p`
	font-size: 1.4rem;
	font-weight: bold;
	color: ${({ theme }) => theme.textSecondary};
`;

const ChangeText = styled.small`
	font-size: 1.2rem;
	color: ${({ color }) =>
		color === 'up' ? `var(--limegreen)` : `var(--brightred)`};
	margin-left: 0.5rem;
`;

const ChangeContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const OverviewCard = ({ metric, platform, count, change, trend }) => {
	return (
		<StyledCard>
			<Row style={{ marginBottom: 2.4 + 'rem' }}>
				<Heading>{metric}</Heading>
				<SocialIcon platform={platform} />
			</Row>
			<Row>
				<ViewCount>{count}</ViewCount>
				<ChangeContainer>
					<CountIcon direction={trend} />
					<ChangeText color={trend}>{change}%</ChangeText>
				</ChangeContainer>
			</Row>
		</StyledCard>
	);
};

export default OverviewCard;
