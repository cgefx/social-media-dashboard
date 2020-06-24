import styled from 'styled-components';

const Paragraph = styled.p`
	font-size: ${({ small }) => (small ? '1.2rem' : '1.4rem')};
	font-weight: 700;
	color: ${({ theme }) => theme.textSecondary};
	text-transform: capitalize;
`;

export default Paragraph;
