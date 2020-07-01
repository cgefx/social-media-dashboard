import React from 'react'
import { formatCount } from '../utils'
import { SocialIcon, UpDownIcon } from '../components'
import {
  Card,
  Row,
  Paragraph,
  SmallText,
  StyledBorder,
  Heading,
  SubHeading,
} from './style'

function FollowersCard({ username, metric, platform, count, change, trend }) {
  return (
    <StyledBorder color={platform}>
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
    </StyledBorder>
  )
}

export default FollowersCard
