import React from 'react';
import { formatCount } from '../utils';
import { SocialIcon, UpDownIcon } from '../components';
import { Card, Row, Paragraph, SmallText, HeadingSecondary } from './style';

const OverviewCard = ({ metric, platform, count, change, trend }) => {
	return (
		<Card>
			<Row>
				<Paragraph>{metric}</Paragraph>
				<SocialIcon platform={platform} />
			</Row>
			<Row>
				<HeadingSecondary>{formatCount(count)}</HeadingSecondary>
				<Row centered>
					<UpDownIcon direction={trend} />
					<SmallText color={trend}>{change}%</SmallText>
				</Row>
			</Row>
		</Card>
	);
};

export default OverviewCard;
