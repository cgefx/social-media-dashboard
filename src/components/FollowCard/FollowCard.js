import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';
import CountIcon from '../CountIcon/CountIcon';

const BorderWrapper = styled.div`
	background: ${({ color }) => `var(--${color})`};
	max-width: 40rem;
	border-radius: 4px;
	padding-top: 0.4rem;
	margin: 0 auto;
`;

const StyledCard = styled.div`
	background: ${({ theme }) => theme.cardBackground};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2.8rem;
	margin: 0 auto;
	justify-content: center;
`;

const Row = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

const FollowCount = styled.h1`
	font-size: 5.6rem;
	font-weight: bold;
	text-align: center;
	margin-top: 2.4rem;
`;

const UserHandle = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
	margin-left: 1rem;
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
	margin: 2.4rem 0;
`;

const SubTitle = styled.h3`
	text-transform: uppercase;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.textSecondary};
	font-weight: 400;
	letter-spacing: 0.4rem;
	text-align: center;
	margin-top: 0.5rem;
`;

const FollowCard = ({ username, metric, platform, count, change, trend }) => {
	return (
		<BorderWrapper color={platform}>
			<StyledCard>
				<Row>
					<SocialIcon platform={platform} />
					<UserHandle>{username}</UserHandle>
				</Row>
				<FollowCount>{count}</FollowCount>
				<SubTitle>{metric}</SubTitle>
				<ChangeContainer>
					<CountIcon direction={trend} />
					<ChangeText color={trend}>{change} Today</ChangeText>
				</ChangeContainer>
			</StyledCard>
		</BorderWrapper>
	);
};

export default FollowCard;
