import styled from 'styled-components';

const SubHeading = styled.h3`
	text-transform: uppercase;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.textSecondary};
	font-weight: 400;
	letter-spacing: 0.4rem;
	text-align: center;
	margin-top: 0.5rem;
`;

export default SubHeading;
