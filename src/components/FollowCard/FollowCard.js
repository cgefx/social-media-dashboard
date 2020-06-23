import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';
import CountIcon from '../CountIcon/CountIcon';
import { formatCount } from '../../utils';

const BorderWrap = styled.div`
	background: ${({ color }) => `var(--${color})`};
	margin: 0;
	border: none;
	border-radius: 6px;
	padding: 0.4rem 0 0 0;
	height: 100%;
`;

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding-top: 2.8rem;
	border-radius: 4px;
	background: ${({ theme }) => theme.cardBackground};

	:hover {
		background: ${({ theme }) => theme.cardBackgroundHover};
		cursor: pointer;
	}
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
		<BorderWrap color={platform}>
			<StyledCard>
				<Row>
					<SocialIcon platform={platform} />
					<UserHandle>{username}</UserHandle>
				</Row>
				<FollowCount>{formatCount(count)}</FollowCount>
				<SubTitle>{metric}</SubTitle>
				<ChangeContainer>
					<CountIcon direction={trend} />
					<ChangeText color={trend}>{change} Today</ChangeText>
				</ChangeContainer>
			</StyledCard>
		</BorderWrap>
	);
};

export default FollowCard;
