import React from 'react';
import styled from 'styled-components';
import { SocialIcon, UpDownIcon } from '../components';
import { Card, Row, Paragraph, SmallText, Heading, SubHeading } from './style';
import { formatCount } from '../utils';

const BorderWrap = styled.div`
	background: ${({ color }) => `var(--${color})`};
	margin: 0;
	border: none;
	border-radius: 6px;
	padding: 0.4rem 0 0 0;
	height: 100%;
`;

function FollowersCard({ username, metric, platform, count, change, trend }) {
	return (
		<BorderWrap color={platform}>
			<Card>
				<Row centered>
					<SocialIcon platform={platform} />
					<Paragraph small style={{ marginLeft: '.5rem' }}>
						{username}
					</Paragraph>
				</Row>
				<Heading centered large>
					{formatCount(count)}
				</Heading>
				<SubHeading>{metric}</SubHeading>
				<Row centered>
					<UpDownIcon direction={trend} />
					<SmallText color={trend}>{change} Today</SmallText>
				</Row>
			</Card>
		</BorderWrap>
	);
}

export default FollowersCard;
