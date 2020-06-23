import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../SocialIcon/SocialIcon';
import UpDownIcon from '../UpDownIcon/UpDownIcon';
import { formatCount } from '../../utils';

import { Card, Row, Paragraph, SmallText } from '../style';

const ViewCount = styled.h2`
	font-size: 3.2rem;
	font-weight: bold;
`;

const OverviewCard = ({ metric, platform, count, change, trend }) => {
	return (
		<Card>
			<Row>
				<Paragraph>{metric}</Paragraph>
				<SocialIcon platform={platform} />
			</Row>
			<Row>
				<ViewCount>{formatCount(count)}</ViewCount>
				<Row centered>
					<UpDownIcon direction={trend} />
					<SmallText color={trend}>{change}%</SmallText>
				</Row>
			</Row>
		</Card>
	);
};

export default OverviewCard;
