import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';
import UpDownIcon from '../UpDownIcon/UpDownIcon';
import { formatCount } from '../../utils';

import { Card, Row, Paragraph, SmallText } from '../style';

const BorderWrap = styled.div`
	background: ${({ color }) => `var(--${color})`};
	margin: 0;
	border: none;
	border-radius: 6px;
	padding: 0.4rem 0 0 0;
	height: 100%;
`;

const FollowCount = styled.h1`
	font-size: 5.6rem;
	font-weight: bold;
	text-align: center;
	margin-top: 2.4rem;
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
			<Card>
				<Row centered>
					<SocialIcon platform={platform} />
					<Paragraph small style={{ marginLeft: '.5rem' }}>
						{username}
					</Paragraph>
				</Row>
				<FollowCount>{formatCount(count)}</FollowCount>
				<SubTitle>{metric}</SubTitle>
				<Row centered>
					<UpDownIcon direction={trend} />
					<SmallText color={trend}>{change} Today</SmallText>
				</Row>
			</Card>
		</BorderWrap>
	);
};

export default FollowCard;
