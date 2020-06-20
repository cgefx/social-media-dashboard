import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';
import CountIcon from '../CountIcon/CountIcon';

// const StyledCard = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	margin: auto;
// 	height: 100%;
// 	position: relative;
// 	padding-top: 2.8rem;
// 	box-sizing: border-box;
// 	background: ${({ theme }) => theme.cardBackground};
// 	background-clip: padding-box;
// 	border: solid 5px transparent;
// 	border-radius: 1em;

// 	:hover {
// 		background: ${({ theme }) => theme.cardBackgroundHover};
// 	}

// 	&:before {
// 		content: '';
// 		position: absolute;
// 		top: 0;
// 		right: 0;
// 		bottom: 0;
// 		left: 0;
// 		z-index: -1;
// 		margin-top: -5px;
// 		border-radius: inherit;
// 		background: ${({ color }) => `var(--${color})`};
// 	}
// `;

const BorderWrap = styled.div`
	background: ${({ color }) => `var(--${color})`};
	margin: 0;
	border: none;
	border-radius: 1.6rem;
	padding: 0.4rem 0 0 0;
`;

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding-top: 2.8rem;
	border-radius: inherit;
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
				<FollowCount>{count}</FollowCount>
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
