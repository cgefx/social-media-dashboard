import styled from 'styled-components';

const Paragraph = styled.p`
	font-size: ${({ small }) => (small ? '1.2rem' : '1.4rem')};
	font-weight: bold;
	color: ${({ theme }) => theme.textSecondary};
`;

export default Paragraph;
