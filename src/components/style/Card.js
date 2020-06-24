import styled from 'styled-components';

const Card = styled.div`
	background: ${({ theme }) => theme.cardBackground};
	padding: 2.4rem;
	border-radius: 4px;
	margin: 0 auto;
	height: 100%;

	:hover {
		background: ${({ theme }) => theme.cardBackgroundHover};
		transform: translateY(-3px);
		cursor: pointer;
	}
`;

export default Card;
