import styled from 'styled-components';

export const Grid = styled.ul`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
	grid-gap: ${({ large }) => (large ? '2.4rem' : '1.6rem')};
`;

export const Row = styled.div`
	display: flex;
	justify-content: ${({ centered }) => (centered ? 'center' : 'space-between')};
	align-items: center;

	&:not(:last-of-type) {
		margin-bottom: 1.6rem;
	}
`;

export const Card = styled.div`
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

export const Heading = styled.h1`
	font-size: 2.2rem;
	margin-bottom: 1rem;

	@media (min-width: 900px) {
		font-size: 3.2rem;
	}
`;

export const Paragraph = styled.p`
	font-size: ${({ small }) => (small ? '1.2rem' : '1.4rem')};
	font-weight: bold;
	color: ${({ theme }) => theme.textSecondary};
`;

export const SmallText = styled.small`
	font-size: 1.2rem;
	color: ${({ color }) =>
		color === 'up' ? `var(--limegreen)` : `var(--brightred)`};
	margin-left: 0.5rem;
`;

export const StyledLine = styled.hr`
	border: 0;
	margin-top: 2.4rem;
	border-top: 1px solid ${({ theme }) => theme.textSecondary};
	@media (min-width: 900px) {
		display: none;
		opacity: 0;
	}
`;
