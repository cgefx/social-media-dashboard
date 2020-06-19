import React from 'react';
import { ReactComponent as UpIcon } from '../../images/icon-up.svg';
import { ReactComponent as DownIcon } from '../../images/icon-down.svg';

const CountIcon = ({ direction }) => {
	return direction === 'up' ? <UpIcon /> : <DownIcon />;
};

export default CountIcon;
