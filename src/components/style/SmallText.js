import styled from 'styled-components';

const SmallText = styled.small`
	font-size: 1.2rem;
	color: ${({ color }) =>
		color === 'up' ? `var(--limegreen)` : `var(--brightred)`};
	margin-left: 0.5rem;
`;

export default SmallText;
