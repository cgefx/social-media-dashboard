import styled from 'styled-components';

const StyledBorder = styled.div`
	background: ${({ color }) => `var(--${color})`};
	margin: 0;
	border: none;
	border-radius: 6px;
	padding: 0.4rem 0 0 0;
	height: 100%;
`;

export default StyledBorder;
